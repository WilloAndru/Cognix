import { create } from "zustand";
import { sizeGrid } from "../data/constants";

export const useGrid = create((set, get) => ({
  grid: Array.from({ length: sizeGrid }, () =>
    Array.from({ length: sizeGrid }, () => 0)
  ),
}));
