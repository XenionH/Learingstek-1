import SideBar from "../Components/SideBar";
import React from "react";
import { Button } from "react-bootstrap";
import ContentArea from "../Components/ContentArea";
import { Outlet, useLocation, Link } from "react-router-dom";

export function Teori() {
  const location = useLocation();
  console.log(location.pathname);

  let itemCategories: string[] = ["categories"];
  let items1 = ["Int", "Bool", "If"];
  //let items2 = ["If", "If-else"];
  const [dataFromSideNav, setDataFromSideNav] = React.useState("");

  function handleData(data: any) {
    setDataFromSideNav(data);
    console.log("Data received from SideNav:", data);
  }

  function getDestination() {
    if (location.pathname === "/Teori/Int") {
      return "Int";
    } else if (location.pathname === "/Teori/Bool") {
      return "Bool";
    } else if (location.pathname === "/Teori/If") {
      return "If";
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
        <ContentArea version={0}>
          <Outlet />
          <Link to={`/Opgaver/${getDestination()}`}>
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
              Til Opgaven
            </Button>
          </Link>
        </ContentArea>
      </section>
    </>
  );
}
