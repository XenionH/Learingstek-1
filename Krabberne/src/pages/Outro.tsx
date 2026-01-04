import ContentArea from "../Components/ContentArea";
import Speak from "../Components/Speak";
import OutroText from "./Subpages/OutroText";
import { Link } from "react-router";
import { Button } from "react-bootstrap";
import { getDestination } from "../Components/getDestination";

function Outro() {
  return (
    <section style={{ left: "300px", marginLeft: "-100px" }}>
      <ContentArea version={2}>
        <Speak />
        <OutroText />
        <Link to={`${getDestination(true)}`} >
          <Button
            variant="secondary"
            style={{
              display: "block",
              position: "absolute",
              bottom: 0,
              left: 0,
              margin: "25px",
            }}
          >
            Tilbage
          </Button>
        </Link>
      </ContentArea>
    </section>
  );
}

export default Outro;
