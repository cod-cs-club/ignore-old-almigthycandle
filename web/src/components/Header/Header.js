import { useState } from "react"
import Settings from "../Settings/Settings"
import iconSearch from "./search.svg"
import iconSettings from "./settings.svg"
import iconLogo from "./logo.png"
import "./Header.css"

// Header component.
function Header() {
    const [openSettings, setOpenSettings] = useState(false)

    return (
        <header>
            <div id="header-search">
                <input type="search" placeholder="Search Stock..." />
                <img src={iconSearch} />
            </div>
            <div id="header-title">
                <h1>almightycandle</h1>
                <img src={iconLogo} />
            </div>
            <button id="settings-button" onClick={() => { setOpenSettings(true) }}>
                <img src={iconSettings} />
            </button>
            {openSettings && <Settings open={openSettings} setOpen={setOpenSettings} />}
        </header>
    )
}

export default Header
