import { Outlet } from "react-router";
import ContentArea from "../Components/ContentArea";
import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { StartZone } from "../Components/DropZone";
import type { ItemLocation, ItemId, SlotId, StartSlotId, Item } from "../Components/Types";
import { checkSolution } from "../Components/Solution";
import SideBar from "../Components/SideBar";
import type { DndOutletContext } from "../Components/outletType";
import { getTaskData } from "../Components/getTaskData";
import Story_Int from "./Subpages/Story_Int";
import Story_Bool from "./Subpages/Story_Bool";
import Story_If from "./Subpages/Story_If";
import { getPicture } from "../Components/getPicture";
import Speak from "../Components/Speak";

export function Opgaver() {
  const task = getTaskData(); // baseret på route


  function createInitialLocations(
    { items, startSlots }: { items: Item[]; startSlots: StartSlotId[] }
  ): ItemLocation {
    const result: ItemLocation = {};

    items.forEach((item, index) => {
      result[item.id] = startSlots[index];
    });

    return result;
  }


  const [locations, setLocations] = useState<ItemLocation>(
    createInitialLocations(task)
  );

  const [result, setResult] =
    useState<DndOutletContext["result"]>(null);

  function handleCheckSolution() {
    const res = checkSolution(
      locations,
      task.items,
      task.solution
    );
    setResult(res);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const itemId = active.id as ItemId;
    const targetSlot = over.id as SlotId;

    setLocations((prev) => {
      const sourceSlot = prev[itemId];

      if (sourceSlot === targetSlot) return prev;

      const itemInTarget = Object.entries(prev).find(
        ([id, slot]) => slot === targetSlot && id !== itemId
      )?.[0] as ItemId | undefined;

      // Swap hvis nødvendigt
      if (itemInTarget) {
        return {
          ...prev,
          [itemId]: targetSlot,
          [itemInTarget]: sourceSlot,
        };
      }

      return {
        ...prev,
        [itemId]: targetSlot,
      };
    });
  }

  return (<>
    <SideBar><ContentArea version={3}><h3>Din Opgave:</h3><br />Træk de rigtige ting hen på de tomme pladser i sætningerne!</ContentArea> </SideBar>

    <section style={{ position: "relative", left: "260px", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "15px 40px", float: "left", justifyContent: "flex-start" }}>
      <ContentArea version={5}>
        {(task.id === "Int") && <Story_Int />}
        {(task.id === "Bool") && <Story_Bool />}
        {(task.id === "If") && <Story_If />}
        <Speak />
      </ContentArea>
      <ContentArea version={6}>
        {getPicture()}
      </ContentArea>
      <DndContext onDragEnd={handleDragEnd}>
        <ContentArea version={0}>
          <Outlet context={{ locations, items: task.items, result, checkSolution: handleCheckSolution }} />
        </ContentArea>

        <ContentArea version={4}>
          <h5 style={{ textDecoration: "underline" }}>Svarmuligheder</h5>
          <StartZone
            startSlots={task.startSlots}
            locations={locations}
          ></StartZone>
        </ContentArea>

        {/* Opgavespecifikt indhold */}
      </DndContext>
    </section >
    <section style={{ height: "20px" }}>

    </section>
  </>
  );
}

