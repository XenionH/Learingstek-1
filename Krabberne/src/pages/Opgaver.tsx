import ContentArea from "../Components/ContentArea";
import SideBar from "../Components/SideBar";

export function Opgaver() {
  let items = ["Int", "Bool", "If"];
  let itemCategories = ["Opgaver"];

  function handledata(data: any) {
    console.log("Data received from SideNav:", data);
  }

  return (
    <>
      <SideBar
        withSideNav={true}
        sideNavItemCategories={itemCategories}
        sideNavItems={[items]}
        dropdown={false}
        sendDataFromSideNav={handledata}
      />
      <section>
        <ContentArea version={0}>hey</ContentArea>
      </section>
    </>
  );
}
