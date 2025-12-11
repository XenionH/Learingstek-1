import React from "react";
import SideNav from "./SideNav";
import styles from "./Navbar.module.css";
import { Link } from "react-router";

interface SideBarProps {
  withSideNav: boolean;
  sideNavItems?: string[][];
  sideNavItemCategories: string[];
  sendDataFromSideNav: any;
  dropdown: boolean;
}

function SideBar(props: SideBarProps) {
  const [, setDataFromSideNav] = React.useState("");

  function handleData(data: any) {
    setDataFromSideNav(data);
    props.sendDataFromSideNav(data);
  }

  if (!props.withSideNav) {
    return <div></div>;
  } else {
    return (
      <div className={styles.sidebar}>
        <SideNav
          sendData={handleData}
          items={props.sideNavItems}
          itemcategories={props.sideNavItemCategories}
          dropdowns={props.dropdown}
        />
      </div>
    );
  }
}

export default SideBar;
