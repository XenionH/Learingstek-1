import { Link } from "react-router-dom";
import { InlineSlotZone } from "../../Components/DropZone";
import { DraggableItem } from "../../Components/DraggableItem";
import { useSlotItem } from "../../Components/selectors";
import { useOutletContext } from "react-router-dom";
import { Button } from "react-bootstrap";
import type { DndOutletContext, OpgaverOutletContext } from "../../Components/outletType";
import type { SlotId } from "../../Components/Types";
import { useState } from "react";
import { getDestination } from "../../Components/getDestination";

function Opgaver_If() {

  const { items, locations } =
    useOutletContext<OpgaverOutletContext>();
  const { checkSolution, result } =
    useOutletContext<DndOutletContext>();

  const line1Correct = areSlotsCorrect(
    ["slot-1"],
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


  return (<p style={{ padding: 20, paddingLeft: 70, fontSize: 25, lineHeight: "32px", textAlign: "left" }}>
    <h4 style={{ textDecoration: "underline" }}>(Husk på bools og "sandt/falsk")</h4>

    <br />
    (if tøjetBlevFundet er Sandt)
    <br />
    <br />
    {"{"}
    <br />
    Bool KrabberneFester =
    <InlineSlotZone id="slot-1">
      {slot1Item && <DraggableItem item={slot1Item} />}
    </InlineSlotZone>

    {checked && (line1Correct ? (
      <span style={{ color: "green", fontWeight: "bold" }}> ✓</span>
    ) : (
      <span style={{ color: "red", fontWeight: "bold" }}> ✘</span>
    ))}
    <br />
    <br />
    {"}"}
    <Button variant="warning" onClick={handleCheck} style={{ position: "absolute", bottom: 0, left: 30, margin: "25px" }}>Tjek Svar</Button>
    <Link style={{ pointerEvents: (checked && (line1Correct)) ? "auto" : "none" }} to={`${getDestination()}`} >
      <Button disabled={!checked && !(line1Correct)}
        variant="secondary"
        style={{
          display: "block",
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: "25px",
          opacity: checked && (line1Correct) ? 1 : 0.5,
        }}
      >
        Til historien
      </Button>
    </Link>

  </p>)
}

export default Opgaver_If;
