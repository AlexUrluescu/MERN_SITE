
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <div>
            <Link to="/"> Home </Link>
            <Link to="/register"> Register </Link>
            {/* <Link to="/home"> Home </Link> */}
        </div>
    )
}

export default NavBar;