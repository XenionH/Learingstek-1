import { Outlet } from "react-router";
import { NavBar } from "./Components/NavBar";

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
