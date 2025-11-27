import SideNav from "../Components/SideNav";
import React from "react";
import Teori_Int from "./Subpages/Teori_Int";
import Teori_Bool from "./Subpages/Teori_Bool";
import Teori_If from "./Subpages/Teori_If";
import Teori_If_else from "./Subpages/Teori_If_Else";
import Teori_Start from "./Subpages/Teori_Start";

export function Teori() {
  let itemsCategories: string[] = ["categories"];
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
        return <Teori_Int />;
      case "Bool":
        return <Teori_Bool />;
      case "If":
        return <Teori_If />;
      case "If-else":
        return <Teori_If_else />;
      default:
        return <Teori_Start />;
    }
  }

  return (
    <>
      <SideNav
        itemcategories={itemsCategories}
        items={[items1]}
        dropdowns={false}
        sendData={handleData}
      />
      <section>{renderSwitch()}</section>
    </>
  );
}
