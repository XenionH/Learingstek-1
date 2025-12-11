import styles from "./Navbar.module.css";
import React from "react";
import { DropDown } from "./DropDown";
import { Link } from "react-router";

interface Props {
  itemcategories: string[];
  items?: string[][];
  dropdowns: boolean;
  sendData?: any;
}

function SideNav({ itemcategories, items, dropdowns, sendData }: Props) {
  const [, setData] = React.useState("");

  function handleClick(item: string) {
    setData(item);
  }

  return (
    <div>
      <ul className={styles.sidenav}>
        {" "}
        {items?.map((item, Index) => (
          <>
            <a
              className={styles.sidenavtext}
              id="category"
              style={{ textDecorationLine: "underline", fontSize: "24px" }}
            >
              {itemcategories.length > 1
                ? itemcategories[Index]
                : `Kategorier:`}
            </a>
            {item.map((subItem) => (
              <>
                {dropdowns ? (
                  <DropDown items={subItem} />
                ) : (
                  <Link
                    to={`${subItem}`}
                    key={subItem}
                    className={styles.sidenavlink}
                    onClick={() => (handleClick(subItem), sendData(subItem))}
                  >
                    <a>{subItem}</a>
                  </Link>
                )}
              </>
            ))}
          </>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
