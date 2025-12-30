import { useState, useEffect } from "react";
import { sizeCell } from "../../data/constants";

export function useMovementKeyboard(initialPosition) {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setPosition((prev) => {
        switch (e.key) {
          case "ArrowUp":
            return { ...prev, y: prev.y - sizeCell };
          case "ArrowDown":
            return { ...prev, y: prev.y + sizeCell };
          case "ArrowLeft":
            return { ...prev, x: prev.x - sizeCell };
          case "ArrowRight":
            return { ...prev, x: prev.x + sizeCell };
          default:
            return prev;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return position;
}
