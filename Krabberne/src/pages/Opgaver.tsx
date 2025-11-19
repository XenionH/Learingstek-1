import SideNav from "../Components/SideNav";

export function Opgaver() {
  let items1 = ["Int", "Bool"];
  let items2 = ["If", "If-else"];

  function handledata(data: any) {
    console.log("Data received from SideNav:", data);
  }

  return (
    <>
      <SideNav
        items1={items1}
        items2={items2}
        dropdowns={false}
        sendData={handledata}
      />
      <section>Hey2</section>
    </>
  );
}
