import SideBar from "../Components/SideBar";
import React from "react";
import { Button } from "react-bootstrap";
import ContentArea from "../Components/ContentArea";
import { Outlet, Link } from "react-router-dom";

import Prof from "../assets/Images/Tangsalat_color_01.jpg";
import Speak from "../Components/Speak";

function getDestination() {
  switch (location.pathname) {
    case "/Teori/Int":
    case "/Teori":
      return "Int";
    case "/Teori/Bool":
      return "Bool";
    case "/Teori/If":
      return "If";
  }
}

export function Teori() {
  let itemCategories: string[] = ["categories"];
  let items1 = ["Int", "Bool", "If"];
  //let items2 = ["If", "If-else"];
  const [, setDataFromSideNav] = React.useState("");

  function handleData(data: any) {
    setDataFromSideNav(data);
    console.log("Data received from SideNav:", data);
  }

  return (
    <>
      <SideBar
        withSideNav={true}
        sideNavItemCategories={itemCategories}
        sideNavItems={[items1]}
        dropdown={false}
        sendDataFromSideNav={handleData}
      />
      <section style={{ display: "flex" }}>
        <ContentArea version={0}>
          <Speak />
          <Outlet />
          <Link to={`/Historie/${getDestination()}`}>
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
              Til historien
            </Button>
          </Link>
        </ContentArea>
        <ContentArea version={1}>
          <img src={Prof} />
        </ContentArea>
      </section>
    </>
  );
}
