import type { Item, SlotId, Solution, StartSlotId, Task} from "../../../Components/Types";

export const TASK1 : Task = {
  id: "Int",
  items: [{id: "Int1", label: "Int"}, {id: "Int2", label: "Int"}, {id: "Int3", label: "Int"}, {id: "5", label: "5"}, {id: "Perler", label: "Perler"}, {id: "14", label: "14"},{id:"Guldmønter", label: "Guldmønter"}] as Item[],
  startSlots: ["start-1", "start-2", "start-3","start-4","start-5","start-6", "start-7"] as StartSlotId[],
  slots: ["slot-1", "slot-2", "slot-3", "slot-4", "slot-5", "slot-6"] as SlotId[],
  solution: {
    "slot-1": { type: "label", label: "Int" },
    "slot-2": { type: "label", label: "Int" },
    "slot-3": { type: "oneOfLabels", labels: ["5","14"] },
    "slot-4": { type: "label", label: "Int" },
    "slot-5": { type: "oneOfLabels", labels: ["Perler", "Guldmønter"] },
    "slot-6": { type: "oneOfLabels", labels: ["5","14"] },
  } satisfies Solution,
};

export const TASK2 : Task = {
  id: "Bool",
  items: [
    {id: "Bool1", label: "Bool"},
    {id: "Bool2", label: "Bool"},
    {id: "Sandt1", label: "Sandt"},
    {id: "Sandt2", label: "Sandt"},
    {id: "KlarTilFest", label: "KlarTilFest"},
    {id: "Falskt", label: "Falskt"},
    {id: "ViGiverOp", label: "ViGiverOp"}] as Item[],
  startSlots: ["start-1", "start-2", "start-3", "start-4", "start-5", "start-6","start-7"] as StartSlotId[],
  slots: ["slot-1", "slot-2",   "slot-3", "slot-4", "slot-5", "slot-6"] as SlotId[],
  solution: {
    "slot-1": { type: "label", label: "Falskt" },
    "slot-2": { type: "label", label: "Bool" },
    "slot-3": { type: "label", label: "Sandt" },
    "slot-4": { type: "label", label: "Bool" },
    "slot-5": { type: "id", itemId: "KlarTilFest" },
    "slot-6": { type: "label", label: "Sandt" },
  } satisfies Solution,
};
export const TASK3 : Task = {
  id: "If",
  items: [{id: "Int", label: "Int"},
     {id: "KlaraSkalTilFest", label: "KlaraSkalTilFest"},
     {id: "ViGiverOp", label: "ViGiverOp"},
     {id:"Bool1", label: "Bool"},
     {id: "Sandt", label: "Sandt"},
     {id: "Falskt", label: "Falskt"},
    {id: "Bool2", label: "Bool"}] as Item[],
  startSlots: ["start-1", "start-2", "start-3", "start-4", "start-5", "start-6","start-7"] as StartSlotId[],
  slots: ["slot-1"] as SlotId[],
  solution: {
    "slot-1": { type: "id", itemId: "Sandt" },
  } satisfies Solution,
};

export const ALL_TASKS = {
  Int: TASK1,
  Bool: TASK2,
  If: TASK3,
} satisfies Record<string, Task>;