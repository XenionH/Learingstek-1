import styles from "./Navbar.module.css";

import { DropDown } from "./DropDown";

interface Props {
  items1: string[];
  items2: string[];
  dropdowns: boolean;
}

function SideNav({ items1, items2, dropdowns }: Props) {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidenav}>
        <a className={styles.sidenavtext} id="category">
          Variables
        </a>
        {items1.map((item) => (
          <li key={item} className={styles.sidenavlink}>
            <a>{item}</a>
          </li>
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
              <li key={item} className={styles.sidenavlink}>
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
