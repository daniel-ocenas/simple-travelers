export default function TagList({
  items,
  max = 3,
}: {
  items: string[];
  max?: number;
}) {
  if (items.length === 0) return <span className="text-gray-400">—</span>;
  const visible = items.slice(0, max);
  const overflow = items.length - visible.length;
  return (
    <div className="flex flex-wrap items-center gap-1">
      {visible.map((item) => (
        <span
          key={item}
          className="inline-flex items-center rounded-md bg-gray-100 px-1.5 py-0.5 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
        >
          {item}
        </span>
      ))}
      {overflow > 0 && (
        <span className="text-xs text-gray-400">+{overflow}</span>
      )}
    </div>
  );
}
