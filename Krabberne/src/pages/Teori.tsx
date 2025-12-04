import SideBar from "../Components/SideBar";
import React from "react";
import Teori_Int from "./Subpages/Teori_Int";
import Teori_Bool from "./Subpages/Teori_Bool";
import Teori_If from "./Subpages/Teori_If";
import Teori_If_else from "./Subpages/Teori_If_Else";
import Teori_Start from "./Subpages/Teori_Start";
import { Button } from "react-bootstrap";
import ContentArea from "../Components/ContentArea";

export function Teori() {
  let itemCategories: string[] = ["categories"];
  let items1 = ["Int", "Bool", "If"];
  //let items2 = ["If", "If-else"];
  const [dataFromSideNav, setDataFromSideNav] = React.useState("");

  function handleData(data: any) {
    setDataFromSideNav(data);
    console.log("Data received from SideNav:", data);
  }

  function renderSwitch() {
    switch (dataFromSideNav) {
      case "Int":
        return (
          <div>
            <Teori_Int />
            <Button
              variant="primary"
              style={{
                display: "block",
                position: "absolute",
                bottom: 0,
                right: 0,
                margin: "25px",
              }}
            >
              Til opgaver
            </Button>
          </div>
        );
      case "Bool":
        return (
          <div>
            <Teori_Bool />
            <Button
              variant="primary"
              style={{
                display: "block",
                position: "absolute",
                bottom: 0,
                right: 0,
                margin: "25px",
              }}
            >
              Til opgaver
            </Button>
          </div>
        );
      case "If":
        return (
          <div>
            <Teori_If />
            <Button
              variant="primary"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                margin: "25px",
              }}
            >
              Til opgaver
            </Button>
          </div>
        );
      case "If-else":
        return (
          <div>
            <Teori_If_else />
            <Button
              variant="primary"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                margin: "25px",
              }}
            >
              Til opgaver
            </Button>
          </div>
        );
      default:
        return <Teori_Start />;
    }
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
      <section>
        <ContentArea version={0}>{renderSwitch()}</ContentArea>
      </section>
    </>
  );
}
