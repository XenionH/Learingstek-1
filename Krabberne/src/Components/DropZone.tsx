import { useDroppable } from "@dnd-kit/core";
import type { ReactNode } from "react";
import type { SlotId } from "./Types";
import type { ItemLocation, StartSlotId } from "./Types";
import { groupItemsByZone, mapItemsById } from "./selectors";
import DraggableItem from "./DraggableItem";
import { ALL_TASKS } from "../pages/Subpages/Tasks/Tasks";

interface StartZoneProps {
  startSlots: StartSlotId[];
  locations: ItemLocation;
}

export function StartZone({ startSlots, locations }: StartZoneProps) {
  const itemsByZone = groupItemsByZone(locations);
  const itemMap = mapItemsById(getTaskData()?.items ?? []);

  function getTaskData() {
    switch (location.pathname) {
      case "/Opgaver/Int":
        return ALL_TASKS.Int;
      case "/Opgaver/Bool":
        return ALL_TASKS.Bool;
      case "/Opgaver/If":
        return ALL_TASKS.If;
      default:
        return ALL_TASKS.Int;
    }
  }

  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        flexWrap: "wrap",
        alignContent: "flex-start",
        justifyContent: "center",
      }}
    >
      {startSlots.map((slotId) => {
        const itemId = itemsByZone[slotId]?.[0];
        const itemObj = itemId ? itemMap[itemId] : undefined;

        return (
          <StartSlot key={slotId} id={slotId} hasItem={!!itemObj}>
            {itemObj && <DraggableItem item={itemObj} />}
          </StartSlot>
        );
      })}
    </div>
  );
}

interface StartSlotProps {
  id: SlotId;
  hasItem: boolean;
  children?: React.ReactNode;
}

export function StartSlot({ id, children }: StartSlotProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: 145,
        height: 35,
        border: "2px solid #666",
        borderRadius: 24,
        backgroundColor: isOver ? "#e0f7ff" : "#f8f8f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}

interface InlineSlotZoneProps {
  id: SlotId;
  children?: ReactNode;
}

export function InlineSlotZone({ id, children }: InlineSlotZoneProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <span
      ref={setNodeRef}
      style={{
        display: "inline-flex",
        padding: "0px",
        minWidth: 120,
        height: 45,
        borderBottom: "2px solid #333",
        background: isOver ? "#caffbf" : "transparent",
        margin: "0 4px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </span>
  );
}
