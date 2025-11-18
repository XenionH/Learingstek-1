import SideNav from "../Components/SideNav";

export function Teori() {
  let items1 = ["Int", "Bool"];
  let items2 = ["If", "If-else"];

  return (
    <>
      <SideNav items1={items1} items2={items2} dropdowns={false} />
      <section>Hey</section>
    </>
  );
}
