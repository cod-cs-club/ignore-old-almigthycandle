import Settings from "../Settings/Settings"
import iconSettings from "./settings.svg"
import iconLogo from "./logo.png"
import './Header.css';
import { useState } from "react";

// Header component.
function Header() {
  const [openSettings, setOpenSettings] = useState(false)
  
  return (
    <header>
      <input type="search" placeholder="Search Stock..." />
      <div id="header-title">
        <h1>almightycandle</h1>
        <img src={iconLogo} />
      </div>
      <button id="settings-button" onClick={() => { setOpenSettings(true) }}>
        <img src={iconSettings} />
      </button>
      {openSettings && <Settings />}
    </header>
  )
}

export default Header;
