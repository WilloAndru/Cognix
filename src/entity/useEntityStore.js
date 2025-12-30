import { create } from "zustand";
import { sizeCell, sizeGrid } from "../data/constants";

export const useEntityStore = create((set, get) => ({
  position: {
    x: (sizeGrid / 2) * sizeCell,
    y: (sizeGrid / 2) * sizeCell,
  },

  moveRandom: () => {
    const { position } = get();

    const directions = [
      { x: 0, y: -1 },
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: 1, y: 0 },
    ];
    const dir = directions[Math.floor(Math.random() * directions.length)];

    // nueva posición limitada dentro del grid
    const newX = Math.min(
      Math.max(position.x + dir.x * sizeCell, 0),
      (sizeGrid - 1) * sizeCell
    );
    const newY = Math.min(
      Math.max(position.y + dir.y * sizeCell, 0),
      (sizeGrid - 1) * sizeCell
    );

    set({ position: { x: newX, y: newY } });
  },
}));
