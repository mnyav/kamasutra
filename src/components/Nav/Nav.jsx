import React from "react"
import { NavLink, } from "react-router-dom";
import classes from "./Nav.module.css"
const Nav = () => {
    let { nav, item,active } = classes;
    return (


        <nav className={nav}>
            <div className={item}>
                <NavLink activeClassName={active} to="/profile">Profile</NavLink>
            </div>
            <div className={item}>
                <NavLink activeClassName={active} to="/dialogs">Message</NavLink>
            </div>
            <div className={item}>
                <NavLink activeClassName={active} to="/music">Music</NavLink>
            </div>
            <div className={item}>
                <NavLink activeClassName={active} to="news">News</NavLink>
            </div>
            <div className={item}>
                <NavLink activeClassName={active} to="seting">setings</NavLink>
            </div>

        </nav>

    )
}
export default Nav;