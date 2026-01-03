// src/dnd/selectors.ts
import type{ ItemId, ItemLocation, SlotId, Item } from "./Types";
import { useMemo } from "react";

export function getItemInZone(
  locations: ItemLocation,
  zone: SlotId
): ItemId | null {
  return (
    (Object.entries(locations) as [ItemId, SlotId][])
      .find(([, z]) => z === zone)?.[0] ?? null
  );
}

export function mapItemsById(items: Item[]): Record<ItemId, Item> {
  return Object.fromEntries(items.map(item => [item.id, item])) as Record<ItemId, Item>;
}


  export function groupItemsByZone(
  locations: ItemLocation
): Record<SlotId, ItemId[]> {
  const result = {} as Record<SlotId, ItemId[]>;

  (Object.entries(locations) as [ItemId, SlotId][]).forEach(
    ([itemId, zone]) => {
      if (!result[zone]) {
        result[zone] = [];
      }
      result[zone].push(itemId);
    }
  );

  return result;
}

export function useSlotItem(
  slotId: SlotId,
  locations: ItemLocation,
  items: Item[]
): Item | undefined {
  return useMemo(() => {
    const itemsByZone = groupItemsByZone(locations);
    const itemId = itemsByZone[slotId]?.[0];
    if (!itemId) return undefined;

    const itemMap = mapItemsById(items);
    return itemMap[itemId];
  }, [slotId, locations, items]);
}
