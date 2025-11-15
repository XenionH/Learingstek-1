import { Outlet } from "react-router";
import { NavBar } from "./Components/NavBar";
import SideNav from "./Components/SideNav";

export function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
