import { useDraggable } from "@dnd-kit/core";
import type { Item } from "./Types";

interface DraggableItemProps {
  item?: Item;
}

export function DraggableItem({ item }: DraggableItemProps) {
  if (!item) return null;

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: item.id });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        background: "#3aff03ff",
        padding: "0px",
        borderRadius: 15,
        fontSize: 20,
        cursor: "grab",
        whiteSpace: "nowrap",
        zIndex: isDragging ? 1000 : "auto",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: "140px",
        height: "30px",
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
    >
      {item.label}
    </div>
  );
}

export default DraggableItem;
