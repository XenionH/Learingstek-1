import styles from "./Navbar.module.css";

function SideNav() {
  const items1 = ["int", "bool"];
  const items2 = ["if", "if/else"];
  const subItems2_1 = ["if opg. 1", "if opg. 2", "if opg. 3", "if opg. 4"];

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
            <button key={item} className={styles.dropdown_btn}>
              {item}
            </button>
            <div className={styles.dropdown_container}>
              {subItems2_1.map((item2_1) => (
                <li key={item2_1} className={styles.sidenavlink}>
                  <a className="innerlink">{item2_1}</a>
                </li>
              ))}
            </div>
          </>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
