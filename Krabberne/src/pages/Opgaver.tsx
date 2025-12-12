import { Outlet } from "react-router";
import ContentArea from "../Components/ContentArea";
import SideBar from "../Components/SideBar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export function Opgaver() {
  let items = ["Int", "Bool", "If"];
  let itemCategories = ["Opgaver"];

  function handledata(data: any) {
    console.log("Data received from SideNav:", data);
  }

  function getDestination() {
    switch (location.pathname) {
      case "/Opgaver":
      case "/Opgaver/Int":
        return "/Teori/Bool";
      case "/Opgaver/Bool":
        return "/Teori/If";
      case "/Opgaver/If":
        return "/Outro";
    }
  }
  return (
    <>
      <SideBar
        withSideNav={false}
        sideNavItemCategories={itemCategories}
        sideNavItems={[items]}
        dropdown={false}
        sendDataFromSideNav={handledata}
      />
      <section>
        <ContentArea version={0}>
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
              Til Teori
            </Button>
          </Link>
        </ContentArea>
      </section>
    </>
  );
}
