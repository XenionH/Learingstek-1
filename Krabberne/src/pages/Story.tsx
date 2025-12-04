import React from "react";
import StoryTeller from "../Components/StoryTeller";
import SideBar from "../Components/SideBar";
import ContentArea from "../Components/ContentArea";

export function Story() {
  const [, setDataFromSideNav] = React.useState("");

  function handleData(data: any) {
    setDataFromSideNav(data);
  }

  let itemsCategories: string[] = ["categories"];
  let items = ["Akt Int", "Akt Bool", "Akt If"];
  return (
    <>
      <SideBar
        withSideNav={true}
        dropdown={false}
        sideNavItems={[items]}
        sideNavItemCategories={itemsCategories}
        sendDataFromSideNav={handleData}
      />

      <section>
        <ContentArea version={0}>
          <StoryTeller />
        </ContentArea>
      </section>
    </>
  );
}
