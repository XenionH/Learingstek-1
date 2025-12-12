import ContentArea from "../Components/ContentArea";
import Speak from "../Components/Speak";
import OutroText from "./Subpages/OutroText";

function Outro() {
  return (
    <section style={{ left: "100px", marginLeft: "-100px" }}>
      <ContentArea version={2}>
        <Speak />
        <OutroText />
      </ContentArea>
    </section>
  );
}

export default Outro;
