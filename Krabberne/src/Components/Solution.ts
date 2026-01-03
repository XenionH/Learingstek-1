
import type{ Item, ItemLocation, Solution, SlotId} from "./Types";

export function checkSolution(
  locations: ItemLocation,
  items: Item[],
  solution: Solution
) {
  const itemMap = Object.fromEntries(
    items.map((i) => [i.id, i])
  );

  const wrongSlots: SlotId[] = [];

  for (const [slotId, rule] of Object.entries(solution) as [SlotId, typeof solution[SlotId]][]) {
    const itemId = Object.entries(locations).find(
      ([, zone]) => zone === slotId
    )?.[0];

    if (!itemId) {
      wrongSlots.push(slotId);
      continue;
    }

    const item = itemMap[itemId];

    let ok = false;

    if (!rule) {
      wrongSlots.push(slotId);
      continue;
    }

    if (rule.type === "label") {
  ok = item.label === rule.label;
}

if (rule.type === "oneOfLabels") {
  ok = rule.labels.includes(item.label);
}

if (rule.type === "id") {
  ok = item.id === rule.itemId;
}

    if (!ok) wrongSlots.push(slotId as SlotId);
  }

  return {
    isCorrect: wrongSlots.length === 0,
    wrongSlots,
  };
}
