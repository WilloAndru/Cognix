import { useGrid } from "./useGrid";

export default function Grid() {
  const { grid } = useGrid();

  return (
    <main
      className="grid bg-emerald-400 border"
      style={{ gridTemplateColumns: `repeat(${grid.length}, 1fr)` }}
    >
      {grid.flat().map((cell, i) => (
        <div key={i} className="w-4 h-4"></div>
      ))}
    </main>
  );
}
