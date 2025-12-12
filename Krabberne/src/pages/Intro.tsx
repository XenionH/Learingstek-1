import ContentArea from "../Components/ContentArea";
import Speak from "../Components/Speak";
import IntroText from "./Subpages/Intro_Indhold";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Intro() {
  return (
    <section style={{ left: "100px", marginLeft: "-100px" }}>
      <ContentArea version={2}>
        <Speak />
        <IntroText />
        <Link to="/Historie">
          <Button
            variant="secondary"
            style={{
              display: "block",
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: "25px",
            }}
          >
            Start
          </Button>
        </Link>
      </ContentArea>
    </section>
  );
}

export default Intro;
