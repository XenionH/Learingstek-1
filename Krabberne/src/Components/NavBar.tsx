import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const items = ["Teori", "Opgaver", "Historie"];
  const setActive = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? `${styles.topnavlink} ${styles.topnavactive}`
      : `${styles.topnavlink}`;

  return (
    <>
      <nav className={styles.topnav} style={{}}>
        {items.map((item) => (
          <NavLink to={`/${item}`} className={setActive} key={item}>
            <li>{item}</li>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
