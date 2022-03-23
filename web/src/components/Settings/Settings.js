import './Settings.css';

// Settings component.
function Settings() {
  return (
    <div id="settings-background">
        <div id="settings-container">
            <h2>Settings (WIP)</h2>
            <hr />
            <div id="settings-options-container">
                <h3>Dark Mode (WIP)</h3>
                <label className="toggle">
                    <input id="toggle-darkmode" type="checkbox" />
                    <span className="toggle-slider"></span>
                </label>
            </div>
            <div id="settings-options-container">
                <h3>Something Else (WIP)</h3>
                <label className="toggle">
                    <input id="toggle-something" type="checkbox" />
                    <span className="toggle-slider"></span>
                </label>
            </div>
        </div>
    </div>
  )
}

export default Settings;
