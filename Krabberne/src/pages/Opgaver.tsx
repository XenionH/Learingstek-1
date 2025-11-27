import SideNav from "../Components/SideNav";

export function Opgaver() {
  let items = ["Int", "Bool", "If"];
  let itemCategories = ["Opgaver"];

  function handledata(data: any) {
    console.log("Data received from SideNav:", data);
  }

  return (
    <>
      <SideNav
        itemcategories={itemCategories}
        items={[items]}
        dropdowns={false}
        sendData={handledata}
      />
      <section>Hey2</section>
    </>
  );
}
