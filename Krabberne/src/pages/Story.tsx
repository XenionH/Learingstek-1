
import ContentArea from "../Components/ContentArea";
import { Link } from "react-router";
import Speak from "../Components/Speak";
import { Button } from "react-bootstrap";
import { getDestination } from "../Components/getDestination";
import Story_Intro from "./Subpages/Story_Intro";

export function Story() {
  return (

    <section style={{ display: "flex", left: 80, fontSize: 30 }}>
      <ContentArea version={2}>
        <Speak />
        <Story_Intro />
        <Link to={`${getDestination()}`}>
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
