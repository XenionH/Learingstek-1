import { Button } from "react-bootstrap";
import ContentArea from "../Components/ContentArea";
import { Outlet, Link } from "react-router-dom";
import Prof from "../assets/Images/Tangsalat_color_01.jpg";
import Speak from "../Components/Speak";
import { getDestination } from "../Components/getDestination";



export function Teori() {
  return (
    <>

      <section style={{ display: "flex" }}>
        <ContentArea version={2}>
          <Speak />
          <Outlet />
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
              Til Opgaver
            </Button>
          </Link>
        </ContentArea>
        <ContentArea version={6}>
          <img src={Prof} style={{ borderRadius: "20px" }} />
        </ContentArea>
      </section>
    </>
  );
}
