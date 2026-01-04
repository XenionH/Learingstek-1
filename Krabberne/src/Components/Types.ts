export type Solution = Partial<Record<SlotId, SlotRule>>;

export type SlotRule =
  | { type: "id"; itemId: ItemId }
  | { type: "label"; label: string }
  | { type: "oneOfLabels"; labels: string[] };

export type ItemId = string;

export interface Item {
  id: ItemId;
  label: string;
}

export type ItemLocation = Record<ItemId, SlotId>;

export interface Task {
  id: string;
  items: Item[];
  startSlots: StartSlotId[];
  slots: SlotId[];
  solution: Solution;
}

export type StartSlotId =
  | "start-1"
  | "start-2"
  | "start-3"
  | "start-4"
  | "start-5"
  | "start-6"
  | "start-7";

export type SlotId =
  | StartSlotId
  | "slot-1"
  | "slot-2"
  | "slot-3"
  | "slot-4"
  | "slot-5"
  | "slot-6";




export const ITEM_HOME: Record<ItemId, StartSlotId> = {
  "Int": "start-1",
  "Bool": "start-2",
  "If": "start-3",
  "5": "start-4",
  "10": "start-5",
  "14": "start-6",
  "ClaraSkalTilFest": "start-7",
};


