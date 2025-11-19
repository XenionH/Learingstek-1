import styles from "./Navbar.module.css";
import React from "react";
import { DropDown } from "./DropDown";

interface Props {
  items1: string[];
  items2: string[];
  dropdowns: boolean;
  sendData?: any;
}

function SideNav({ items1, items2, dropdowns, sendData }: Props) {
  const [data, setData] = React.useState("");

  function handleClick(item: string) {
    setData(item);
  }

  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidenav}>
        <a className={styles.sidenavtext} id="category">
          Variables
        </a>
        {items1.map((item) => (
          <>
            {dropdowns ? (
              <DropDown items={item} />
            ) : (
              <li
                key={item}
                className={styles.sidenavlink}
                onClick={() => (handleClick(item), sendData(item))}
              >
                <a>{item}</a>
              </li>
            )}
          </>
        ))}
      </ul>
      <ul className={styles.sidenav}>
        <a className={styles.sidenavtext} id="category">
          Conditionals
        </a>
        {items2.map((item) => (
          <>
            {dropdowns ? (
              <DropDown items={item} />
            ) : (
              <li
                key={item}
                className={styles.sidenavlink}
                onClick={() => (handleClick(item), sendData(item))}
              >
                <a>{item}</a>
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
}

/*function toggleDropdown(containerVisible) {
  return containerVisible
    ? (containerVisible = false)
    : (containerVisible = true);
}
*/
export default SideNav;
