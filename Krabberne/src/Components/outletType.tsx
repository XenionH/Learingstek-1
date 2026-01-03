import type { ItemLocation } from "./Types";
import { useDnd } from "./useDnd";
import type { Item, SlotId, Task } from "./Types";
import { Outlet } from "react-router-dom";
import { getTaskData } from "./getTaskData";


export type DndOutletContext = {
  locations: ItemLocation;
  checkSolution: () => void;
  result: {
    isCorrect: boolean;
    wrongSlots: SlotId[];
  } | null;
}

export type OpgaverOutletContext = {
  task: Task;
  items: Item[];
  locations: ItemLocation;
};

export default function OpgaverLayout() {
  const { locations } = useDnd();

  const task = getTaskData();
  const items = task.items;
  const contextValue: OpgaverOutletContext = { task, items, locations };

  return <Outlet context={contextValue} />;
}
