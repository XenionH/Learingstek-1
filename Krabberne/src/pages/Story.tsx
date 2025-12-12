import React from "react";
import StoryTeller from "../Components/StoryTeller";
import SideBar from "../Components/SideBar";
import ContentArea from "../Components/ContentArea";
import { Link, Outlet } from "react-router";
import Speak from "../Components/Speak";
import { Button } from "react-bootstrap";
import Jeppe from "../assets/Images/Jeppe_color_01.jpg";
import Karla from "../assets/Images/Karla_color_01.jpg";
import Otto from "../assets/Images/Otto_color_01.jpg";
import Kisten from "../assets/Images/Kisten_color_01.jpg";

export function Story() {
  const [, setDataFromSideNav] = React.useState("");

  function handleData(data: any) {
    setDataFromSideNav(data);
  }

  function getDestination() {
    if (location.pathname === "/Historie") {
      return "/Teori";
    } else if (location.pathname === "/Historie/Int") {
      return "/Opgaver/Int";
    } else if (location.pathname === "/Historie/Bool") {
      return "/Opgaver/Bool";
    } else if (location.pathname === "/Historie/If") {
      return "/Opgaver/If";
    }
  }

  function getPicture() {
    switch (location.pathname) {
      case "/Historie":
        return (
          <div>
            KARLA KRABBE
            <img src={Karla} style={{ borderRadius: "20px" }} />
            SIGNAL-JEPPE
            <img src={Jeppe} style={{ borderRadius: "20px" }} />
          </div>
        );
      case "/Historie/Int":
        return (
          <div style={{ maxHeight: "100vh" }}>
            KARLA KRABBE
            <img src={Karla} style={{ borderRadius: "20px" }} />
            SIGNAL-JEPPE
            <img src={Jeppe} style={{ borderRadius: "20px" }} />
            OTTO
            <img src={Otto} style={{ borderRadius: "20px" }} />
          </div>
        );
      case "/Historie/Bool":
        return (
          <div>
            KARLA KRABBE
            <img src={Karla} style={{ borderRadius: "20px" }} />
            SIGNAL-JEPPE
            <img src={Jeppe} style={{ borderRadius: "20px" }} />
            KISTEN
            <img src={Kisten} style={{ borderRadius: "20px" }} />
          </div>
        );
      case "/Historie/If":
        return (
          <div>
            KARLA KRABBE
            <img src={Karla} style={{ borderRadius: "20px" }} />
            SIGNAL-JEPPE
            <img src={Jeppe} style={{ borderRadius: "20px" }} />
          </div>
        );
    }
  }

  let itemsCategories: string[] = ["categories"];
  let items = ["Int", "Bool", "If"];
  return (
    <>
      <SideBar
        withSideNav={true}
        dropdown={false}
        sideNavItems={[items]}
        sideNavItemCategories={itemsCategories}
        sendDataFromSideNav={handleData}
      />

      <section style={{ display: "flex" }}>
        <ContentArea version={0}>
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
              {location.pathname === "/Historie" ? (
                <span>Til Teori </span>
              ) : (
                <span>Til Opgave</span>
              )}
            </Button>
          </Link>
        </ContentArea>
        <ContentArea version={3}>{getPicture()}</ContentArea>
      </section>
    </>
  );
}
