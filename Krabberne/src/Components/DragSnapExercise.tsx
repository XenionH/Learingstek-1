import React from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  PointerSensor,
  closestCenter,
  type DragStartEvent,
  type DragEndEvent,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

// Draggable Item Component
const DraggableItem = ({ id, label }: { id: string; label: string }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
    });

  const style: React.CSSProperties = {
    padding: "10px 20px",
    backgroundColor: "#74b9ff",
    borderRadius: "5px",
    cursor: "grab",
    margin: "10px 0",
    userSelect: "none",
    position: "absolute",
    left: transform ? `${transform.x}px` : undefined,
    top: transform ? `${transform.y}px` : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {label}
    </div>
  );
};

// Drop Zone Component
const DropZone = ({ id }: { id: string }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: "300px",
        height: "200px",
        backgroundColor: "#dfe6e9",
        borderRadius: "8px",
        border: "2px dashed #2d3436",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Drop Here
    </div>
  );
};

// Main Drag-and-Drop Function
interface DragAndDropProps {
  items: { id: string; label: string }[]; // Array of draggable items
  onItemDropped: (itemId: string, dropZoneId: string) => void; // Callback when an item is dropped
}

export const DragAndDrop: React.FC<DragAndDropProps> = ({
  items,
  onItemDropped,
}) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  // Create the Pointer sensor
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  // Register the sensors
  const sensors = useSensors(pointerSensor);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id.toString());
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over) {
      console.log(`${active.id} was dropped into ${over.id}`);
      onItemDropped(active.id.toString(), over.id.toString()); // Notify parent component
    }

    setActiveId(null);
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={sensors}
      collisionDetection={closestCenter}
    >
      <div style={{ padding: "20px" }}>
        <div style={{ position: "relative", marginBottom: "20px" }}>
          {items.map((item) => (
            <DraggableItem key={item.id} id={item.id} label={item.label} />
          ))}
        </div>

        <DropZone id="dropzone" />
      </div>
    </DndContext>
  );
};
