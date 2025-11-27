import { Link } from "react-router";
import image from "../assets/image.png";

export function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        margin: 0,
        marginTop: "-25px",
        padding: "-25px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "103.4vh",
      }}
    >
      <Link
        to="/Teori"
        style={{
          textDecoration: "none",
          position: "absolute",
          top: "94.8%",
          left: "28.37%",
          transform: "translate(-20%, -50%)",
        }}
      >
        <button
          style={{
            fontSize: "2rem",
            height: "8vh",
            width: "22.8vw",
            position: "relative",
            borderRadius: "50px",
            backgroundColor: "transparent",
          }}
        ></button>
      </Link>
      <span
        style={{
          textDecoration: "none",
          position: "absolute",
          top: "94.8%",
          right: "19.1%",
          transform: "translate(-20%, -50%)",
        }}
      >
        <button
          style={{
            fontSize: "2rem",
            height: "8vh",
            width: "23vw",
            position: "relative",
            borderRadius: "50px",
            backgroundColor: "#e1f57d",
          }}
        >
          Til lærere (WIP)
        </button>
      </span>
    </div>
  );
}
