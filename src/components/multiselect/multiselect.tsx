import React, { useEffect, useEffectEvent, useRef, useState } from 'react';

export type Option = { value: string; label: string };

type Props = {
  options: Option[];
  value?: string[];
  onChange?: (selected: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  maxVisibleTags?: number;
  className?: string;
};

export default function MultiSelect({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  disabled = false,
  maxVisibleTags = 3,
  className = '',
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [internalSelected, setInternalSelected] = useState<string[]>(
    value ?? []
  );
  const [highlighted, setHighlighted] = useState<number>(-1);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (Array.isArray(value)) setInternalSelected(value);
  }, [value]);

  const selected = internalSelected;

  const filtered = options.filter(
    (o) =>
      o.label.toLowerCase().includes(query.toLowerCase()) ||
      o.value.toLowerCase().includes(query.toLowerCase())
  );

  function toggleValue(v: string) {
    const exists = selected.includes(v);
    const next = exists ? selected.filter((s) => s !== v) : [...selected, v];
    if (!value) setInternalSelected(next);
    onChange?.(next);
  }

  function removeValue(v: string) {
    const next = selected.filter((s) => s !== v);
    if (!value) setInternalSelected(next);
    onChange?.(next);
  }

  function clearAll() {
    if (!value) setInternalSelected([]);
    onChange?.([]);
  }

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery('');
        setHighlighted(-1);
      }
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const resetHighlight = useEffectEvent(() => {
    setHighlighted(filtered.length ? 0 : -1);
  });

  useEffect(() => {
    resetHighlight();
  }, [query]);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setHighlighted((h) => Math.min(filtered.length - 1, Math.max(0, h + 1)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((h) => Math.max(0, h - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (open && highlighted >= 0 && filtered[highlighted])
        toggleValue(filtered[highlighted].value);
      else setOpen((o) => !o);
    } else if (e.key === 'Escape') {
      setOpen(false);
      setHighlighted(-1);
    } else if (e.key === 'Backspace' && query === '' && selected.length) {
      // remove last selected
      const last = selected[selected.length - 1];
      removeValue(last);
    }
  }

  const visibleTags = selected.slice(0, maxVisibleTags);
  const hiddenCount = selected.length - visibleTags.length;

  return (
    <div ref={rootRef} className={`relative text-sm ${className}`}>
      <div
        className={`flex min-h-[44px] flex-wrap items-center gap-2 rounded-md border bg-white p-2 ${
          disabled ? 'cursor-not-allowed opacity-60' : 'cursor-text'
        } shadow-sm`}
        onClick={() => {
          if (disabled) return;
          setOpen((o) => !o);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
        role="combobox"
        aria-controls={open ? 'multiselect-listbox' : undefined}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {visibleTags.map((v) => {
          const opt = options.find((o) => o.value === v);
          return (
            <span
              key={v}
              className="flex items-center gap-1 rounded-full border bg-gray-100 px-2 py-1"
            >
              <span className="text-xs">{opt?.label ?? v}</span>
              <button
                type="button"
                className="px-1 text-xs leading-none"
                onClick={(e) => {
                  e.stopPropagation();
                  removeValue(v);
                }}
                aria-label={`Remove ${opt?.label ?? v}`}
              >
                ✕
              </button>
            </span>
          );
        })}

        {hiddenCount > 0 && (
          <span className="text-xs text-gray-500">+{hiddenCount}</span>
        )}

        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={selected.length === 0 ? placeholder : ''}
          className="min-w-[120px] flex-1 bg-transparent p-1 text-sm outline-none"
          aria-controls="multiselect-listbox"
          aria-autocomplete="list"
          disabled={disabled}
          onFocus={() => setOpen(true)}
        />

        {selected.length > 0 && (
          <button
            type="button"
            className="ml-1 rounded px-2 py-1 text-xs hover:bg-gray-100"
            onClick={(e) => {
              e.stopPropagation();
              clearAll();
            }}
            aria-label="Clear all selections"
          >
            Clear
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <ul
          id="multiselect-listbox"
          role="listbox"
          aria-multiselectable
          className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white py-1 shadow-lg"
        >
          {filtered.length === 0 && (
            <li className="px-3 py-2 text-sm text-gray-500">No results</li>
          )}

          {filtered.map((opt, idx) => {
            const isSelected = selected.includes(opt.value);
            const isHighlighted = idx === highlighted;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setHighlighted(idx)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  toggleValue(opt.value);
                }}
                className={`flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-gray-100 ${
                  isHighlighted ? 'bg-gray-100' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    readOnly
                    tabIndex={-1}
                    className="pointer-events-none"
                    type="checkbox"
                    checked={isSelected}
                    aria-hidden
                  />
                  <span className="select-none">{opt.label}</span>
                </div>
                {isSelected && (
                  <span className="text-xs font-medium text-gray-600">
                    Selected
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
