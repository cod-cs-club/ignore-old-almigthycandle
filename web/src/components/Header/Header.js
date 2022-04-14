import "./Header.css"

// Header component.
function Header() {
    return (
        <header>
            <h1>almightycandle</h1>
            <ul>
                <li><a href="#" className="selected">Home</a></li>
                <li><a href="#">What is ALCA?</a></li>
                <li><a href="#">Meet The Team</a></li>
                <li><a href="#">Discord</a></li>
            </ul>
            <button>Support Us</button>
        </header>
    )
}

export default Header