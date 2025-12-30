import { useEffect } from "react";
import { useEntityStore } from "../useEntityStore";

export function useRandomMovement(interval = 500) {
  const moveRandom = useEntityStore((state) => state.moveRandom);

  useEffect(() => {
    const timer = setInterval(moveRandom, interval);
    return () => clearInterval(timer);
  }, [moveRandom, interval]);
}
