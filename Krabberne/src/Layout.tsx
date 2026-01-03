import { Outlet } from "react-router";
import image from "./assets/10516317.jpg";

export function Layout() {
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          zIndex: 2,
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <Outlet />
        </div>
      </main>
    </>
  );
}
