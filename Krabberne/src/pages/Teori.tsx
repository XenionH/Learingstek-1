import { Button } from "react-bootstrap";
import ContentArea from "../Components/ContentArea";
import { Outlet, Link } from "react-router-dom";
import Prof from "../assets/Images/Tangsalat_color_01.jpg";
import Speak from "../Components/Speak";
import { getDestination } from "../Components/getDestination";
import Int_Kiste from "../assets/Images/int_opg2.jpg"



export function Teori() {
  return (
    <>

      <section style={{ display: "flex" }}>
        <ContentArea version={2}>
          <Speak />
          <Outlet />
          <Link to={`${getDestination(true)}`}>
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
            </Button></Link>
          <Link to={`${getDestination(false)}`}>
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
        <ContentArea version={7}>
          <img src={Prof} style={{ borderRadius: "20px" }} />
          {location.pathname === "/Teori" && (
            <img src={Int_Kiste} alt="Int kiste" style={{ borderRadius: "20px" }} />
          )}
        </ContentArea>
      </section >
    </>
  );
}
