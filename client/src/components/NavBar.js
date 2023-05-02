
import { Link } from "react-router-dom";
import "../css/NavBar.css"

const NavBar = () => {

    const isLoggedIn = window.localStorage.getItem("loggedIn")

    const handleClick = () => {
        window.localStorage.clear();
        window.location.href = "./login"
    }

    return(
        <div className="navbar">
            <div className="title">
                <h2>Web School</h2>
            </div>
            <div className="links">
                <Link className="link" to="/"> Home </Link>
                <Link className="link" to="/create"> Create </Link>
                <Link className="link" to="/profile"> Profile </Link>
            </div>
            <div className="status_user">
                {isLoggedIn ? <button onClick={handleClick}>Log out</button>: <Link className="link_status" to="/login"> Login </Link>}
            </div>
        </div>
    )
}

export default NavBar;