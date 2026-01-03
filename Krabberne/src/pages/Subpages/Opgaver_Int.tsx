import { InlineSlotZone } from "../../Components/DropZone";
import DraggableItem from "../../Components/DraggableItem";
import { useSlotItem } from "../../Components/selectors";
import { useOutletContext, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import type { DndOutletContext, OpgaverOutletContext } from "../../Components/outletType";
import type { SlotId } from "../../Components/Types";
import { useState } from "react";
import { getDestination } from "../../Components/getDestination";




function Opgaver_Int() {
  const { items, locations } =
    useOutletContext<OpgaverOutletContext>();
  const { checkSolution, result } =
    useOutletContext<DndOutletContext>();

  const line1Correct = areSlotsCorrect(
    ["slot-1"],
    result
  );
  const line2Correct = areSlotsCorrect(
    ["slot-2", "slot-3"],
    result
  );
  const line3Correct = areSlotsCorrect(
    ["slot-4", "slot-5", "slot-6"],
    result
  );

  function areSlotsCorrect(
    slotIds: SlotId[],
    result: {
      wrongSlots: SlotId[];
    } | null
  ): boolean {
    if (!result) return false;

    return slotIds.every(
      (slotId) => !result.wrongSlots.includes(slotId)
    );
  }

  const [checked, setChecked] = useState(false);

  function handleCheck() {
    setChecked(true);
    checkSolution();
  }

  const slot1Item = useSlotItem("slot-1", locations, items);
  const slot2Item = useSlotItem("slot-2", locations, items);
  const slot3Item = useSlotItem("slot-3", locations, items);
  const slot4Item = useSlotItem("slot-4", locations, items);
  const slot5Item = useSlotItem("slot-5", locations, items);
  const slot6Item = useSlotItem("slot-6", locations, items);

  return (
    <p style={{ padding: 20, fontSize: 16, fontWeight: "bold", lineHeight: "32px", textAlign: "center" }}>
      <h3 style={{ textDecoration: "underline" }}>Int Perler = 3</h3>
      <InlineSlotZone id="slot-1">
        {slot1Item && <DraggableItem item={slot1Item} />}
      </InlineSlotZone>
      perler = 3
      {checked && (line1Correct ? (
        <span style={{ color: "green", fontWeight: "bold" }}> ✓</span>
      ) : (
        <span style={{ color: "red", fontWeight: "bold" }}> ✘</span>
      ))}
      <p style={{ borderBottom: "dashed black 2px", padding: "10px" }} />
      <InlineSlotZone id="slot-2">
        {slot2Item && <DraggableItem item={slot2Item} />}
      </InlineSlotZone>
      Guldmønter =
      <InlineSlotZone id="slot-3">
        {slot3Item && <DraggableItem item={slot3Item} />}
      </InlineSlotZone>{checked && (line2Correct ? (
        <span style={{ color: "green", fontWeight: "bold" }}> ✓</span>
      ) : (
        <span style={{ color: "red", fontWeight: "bold" }}> ✘</span>
      ))}
      <p style={{ borderBottom: "dashed black 2px", padding: "10px" }} />
      <InlineSlotZone id="slot-4">
        {slot4Item && <DraggableItem item={slot4Item} />}
      </InlineSlotZone>

      <InlineSlotZone id="slot-5">
        {slot5Item && <DraggableItem item={slot5Item} />}
      </InlineSlotZone>
      =
      <InlineSlotZone id="slot-6">
        {slot6Item && <DraggableItem item={slot6Item} />}
      </InlineSlotZone>{checked && (line3Correct ? (
        <span style={{ color: "green", fontWeight: "bold" }}> ✓</span>
      ) : (
        <span style={{ color: "red", fontWeight: "bold" }}> ✘</span>
      ))}
      <br />
      <br />
      <Button variant="warning" onClick={handleCheck} style={{ position: "absolute", bottom: 0, left: 30, margin: "25px" }}>Tjek Svar</Button>
      <Link style={{ pointerEvents: (checked && (line1Correct && line2Correct && line3Correct)) ? "auto" : "none" }} to={`${getDestination()}`} >
        <Button disabled={!checked && !(line1Correct && line2Correct && line3Correct)}
          variant="secondary"
          style={{
            display: "block",
            position: "absolute",
            bottom: 0,
            right: 0,
            margin: "25px",
            opacity: checked && (line1Correct && line2Correct && line3Correct) ? 1 : 0.5,

          }}
        >
          Videre
        </Button>
      </Link>

    </p>
  );
}

export default Opgaver_Int;
