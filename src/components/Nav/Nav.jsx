import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import Sidebar from "./Sidebar/Sidebar";
const Nav = (props) => {
  let { nav, item, active } = classes;
  return (
    <nav className={nav}>
      <div className={item}>
        <NavLink activeClassName={active} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={item}>
        <NavLink activeClassName={active} to="/dialogs">
          Message
        </NavLink>
      </div>
      <div className={item}>
        <NavLink activeClassName={active} to="/music">
          Music
        </NavLink>
      </div>
      <div className={item}>
        <NavLink activeClassName={active} to="news">
          News
        </NavLink>
      </div>
      <div className={item}>
        <NavLink activeClassName={active} to="seting">
          setings
        </NavLink>
      </div>
      <div className="sidebsr">
        <Sidebar data={props.data} />
      </div>
    </nav>
  );
};
export default Nav;
