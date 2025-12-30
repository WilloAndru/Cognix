import { create } from "zustand";

const size = 20;

export const useGrid = create((set, get) => ({
  grid: Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 0)
  ),
}));
