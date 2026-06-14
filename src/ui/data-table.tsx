import React from 'react';

export type Column<T> = {
  key: string;
  header: React.ReactNode;
  cell: (row: T) => React.ReactNode;
  align?: 'left' | 'right';
  width?: string;
};

type Props<T> = {
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  rowHref?: (row: T) => string | undefined;
};

export default function DataTable<T>({
  columns,
  rows,
  rowKey,
  rowHref,
}: Props<T>) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:bg-gray-900 dark:text-gray-400">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={col.width ? { width: col.width } : undefined}
                className={`px-4 py-2.5 ${col.align === 'right' ? 'text-right' : 'text-left'}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {rows.map((row) => {
            const href = rowHref?.(row);
            return (
              <tr
                key={rowKey(row)}
                className={
                  href
                    ? 'group bg-white transition-colors hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900'
                    : 'bg-white dark:bg-gray-950'
                }
              >
                {columns.map((col, i) => (
                  <td
                    key={col.key}
                    className={`px-4 py-3 align-middle ${col.align === 'right' ? 'text-right' : 'text-left'}`}
                  >
                    {href && i === 0 ? (
                      <a href={href} className="block focus:outline-none">
                        {col.cell(row)}
                      </a>
                    ) : (
                      col.cell(row)
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
