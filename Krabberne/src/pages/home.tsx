import { Link } from "react-router";
export function Home() {
  return (
    <>
      <h1>Hey</h1>
      <Link to="/Teori">
        <button> Gå igang!</button>
      </Link>
      <>
        <button>Til lærere (WIP)</button>
      </>
    </>
  );
}
