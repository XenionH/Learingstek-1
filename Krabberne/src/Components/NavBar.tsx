import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <>
      <nav className={styles.topnav}>
        <li className={styles.topnavlink}>
          <a href="index.html">Hjem</a>
        </li>
        <li className={styles.topnavlink}>
          <a href="teori.html">Teori</a>
        </li>
        <li className={styles.topnavlink}>
          <a href="opgaver.html">Opgaver</a>
        </li>
        <li className={styles.topnavlink}>
          <a href="story.html">Story/Map</a>
        </li>
      </nav>
    </>
  );
}

export default NavBar;
