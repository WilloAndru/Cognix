import { sizeCell } from "../data/constants";
import Entity from "../entity/Entity";
import { useGrid } from "./useGrid";

export default function Grid() {
  const { grid } = useGrid();

  return (
    <main
      className="grid relative bg-emerald-400 border"
      style={{ gridTemplateColumns: `repeat(${grid.length}, 1fr)` }}
    >
      {grid.flat().map((cell, i) => (
        <div key={i} style={{ width: sizeCell, height: sizeCell }}></div>
      ))}
      <Entity />
    </main>
  );
}
