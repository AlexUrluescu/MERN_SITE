
import NavBar from "../components/NavBar";
import "../css/Login.css";

const Login = () => {
    return(
        <div>
            <NavBar />
            <div className="container-fr">
                <div className="login_container">
                    <div className="form_text">
                        <h1><b>Welcome in Web School</b></h1>
                        <h2>Login with your email and password</h2>
                    </div>
                    <form className="login_form">
                        <input className="input_login" type="text" placeholder="Email" />
                        <input className="input_login" type="password" placeholder="Password" />

                        <input className="login_button" type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;