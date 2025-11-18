import React from "react";
import styles from "./Navbar.module.css";

interface Props {
  items: string;
}

export function DropDown({ items }: Props) {
  let subItems2_1 = ["opg. 1", "opg. 2", "opg. 3", "opg. 4"];
  const [containerVisible, setContainerVisibility] = React.useState(false);
  return (
    <>
      <button
        key={items}
        className={
          containerVisible
            ? `${styles.dropdown_btn} ${styles.dropdown_btn_active}`
            : styles.dropdown_btn
        }
        onClick={() => {
          setContainerVisibility(!containerVisible);
        }}
      >
        {items}
      </button>
      <div
        className={
          containerVisible
            ? styles.dropdown_container_active
            : styles.dropdown_container
        }
      >
        {subItems2_1.map((item2_1) => (
          <li
            key={item2_1}
            className={`${styles.innerlink} ${styles.sidenavlink}`}
          >
            <a>{item2_1}</a>
          </li>
        ))}
      </div>
    </>
  );
}
