import React from "react"
import headerStyles from "./Header.module.css"
const Header = () => {
    let { header } = headerStyles
    return <header className={header}>
        <img
            src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
            alt="logo"
            width="30px"
            height="30px"
        ></img>
    </header>
}

export default Header