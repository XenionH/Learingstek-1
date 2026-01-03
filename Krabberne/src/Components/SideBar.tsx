import React from "react";
import type { ReactNode } from "react";
import SideNav from "./SideNav";
import styles from "./Navbar.module.css";

interface SideBarProps {

  sideNavItems?: string[][];
  sideNavItemCategories?: string[];
  sendDataFromSideNav?: any;
  dropdown?: boolean;
  children?: ReactNode;
}



function SideBar(props: SideBarProps) {
  const [, setDataFromSideNav] = React.useState("");

  const hasSideNav = !!props.sideNavItems?.length;

  function handleData(data: any) {
    setDataFromSideNav(data);
    props.sendDataFromSideNav(data);
  }

  if (!hasSideNav) {
    return <div className={styles.sidebar}>{props.children}</div>;
  } else {
    return (
      <div className={styles.sidebar}>
        <SideNav
          sendData={handleData}
          items={props.sideNavItems}
          itemcategories={props.sideNavItemCategories}
          dropdowns={props.dropdown}
        />
        {props.children}
      </div>
    );
  }
}

export default SideBar;
