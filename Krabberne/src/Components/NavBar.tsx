import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const items = ["Teori", "Opgaver", "Map"];
  const setActive = ({ isActive }) =>
    isActive
      ? `${styles.topnavlink} ${styles.topnavactive}`
      : `${styles.topnavlink}`;

  return (
    <>
      <nav className={styles.topnav}>
        {items.map((item) => (
          <NavLink to={`/${item}`} className={setActive} key={item}>
            <a>{item}</a>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
