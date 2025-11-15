import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

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
          <NavLink to={`/${item}`} className={setActive}>
            <a>{item}</a>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
