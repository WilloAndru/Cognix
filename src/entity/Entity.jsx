import { sizeCell } from "../data/constants";
import { useRandomMovement } from "./hooks/useRandomMovement";
import { useEntityStore } from "./useEntityStore";
import { useMovementKeyboard } from "./utils/useMovementKeyboard";

export default function Entity() {
  const { position } = useEntityStore((s) => s);
  useRandomMovement(500);

  return (
    <img
      className="absolute transition-all ease-linear"
      style={{
        width: `${sizeCell}px`,
        height: `${sizeCell}px`,
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      src="/entity.png"
      alt="entity"
    />
  );
}
