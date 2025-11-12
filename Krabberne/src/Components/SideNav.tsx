import styles from "./Navbar.module.css";

function SideNav() {
  return (
    <div className={styles.sidenav}>
      <ul>
        <a id="category">Variables</a>
        <li>
          <a href="#int">int</a>
        </li>
        <li>
          <a id="last" href="#bool">
            bool
          </a>
        </li>
      </ul>

      <ul className={styles.last}>
        <a id="category">Conditionals</a>
        <button className={styles.dropdown_btn}>
          if opgaver <i className="fa fa-caret-down"></i>
        </button>
        <div className={styles.dropdown_container}>
          <li>
            <a href="#if/1">if opg. 1</a>
          </li>
          <li>
            <a href="#if/2">if opg. 2</a>
          </li>
          <li>
            <a href="#if/3">if opg. 3</a>
          </li>
          <li>
            <a href="#if/4">if opg. 4</a>
          </li>
        </div>
        <button className={styles.dropdown_btn} id="last">
          if/else opgaver <i className="fa fa-caret-down"></i>
        </button>
        <div className={styles.dropdown_container} id="last">
          <li>
            <a href="#if/1">if/else opg. 1</a>
          </li>
          <li>
            <a href="#if/2">if/else opg. 2</a>
          </li>
          <li>
            <a href="#if/3">if/else opg. 3</a>
          </li>
          <li>
            <a href="#if/4" id="last">
              if/else opg. 4
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default SideNav;
