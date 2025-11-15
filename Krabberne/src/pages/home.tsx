import { Link } from "react-router";
export function Home() {
  return (
    <>
      <h1>Hey</h1>
      <Link to="/Teori">
        <button> Gå igang!</button>
      </Link>
      <Link to="/Admin">
        <button>Til lærere</button>
      </Link>
    </>
  );
}
