
import { useState, useEffect, useContext, useRef } from "react";
import NavBar from "../components/NavBar";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

import myImage from "../static/planeta.png"
import "../css/HomePage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {

    const targetRef = useRef(null);
    const [ users, setUsers ] = useState([]);
    const [ query, setQuery ] = useState("");
    const {userLogin, setUserLogin} = useContext(UserContext)

    function handleIconClick() {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {

        const sendData = async () => {
            try {
                const res = await fetch("http://localhost:4000/userData", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({token: window.localStorage.getItem("token")})
                });

                const data = await res.json();

                console.log(data);
                console.log(data.data);

                let userData = data.data;
                setUserLogin(userData);
                
            } catch (error) {
                console.log(error);
            }
        }

        sendData();
    }, [setUserLogin])


    console.log(userLogin);
    console.log(userLogin.length);

    return(
        <div>
            <head>
                <title>Home</title>
            </head>
            <NavBar />
            <div className="container_home">
                <div className="container_welcome">
                    {userLogin.length !== 0 ? <h1 className="welcome_h">Hello <b className="welcome_b">{userLogin.first_name} {userLogin.last_name}</b></h1>:<h1></h1>}
                    <h1>Welcome in WebSchool</h1>
                    <p className="container_p">Here is the best place to self-learning</p>
                    <p>WebSchool is the best web learning platform</p>
                    {userLogin.length !== 0 ? <h3></h3>: <Link className="login_link" to="/login"> Login </Link>}
                </div>
                <div className="container_image">
                    <img src={myImage} alt="image"/>
                </div>
            </div>
            <div className="container_arrow">
                <a href="#target">
                    <FontAwesomeIcon className="arrow_icon" icon={faArrowDown} size="2x" />
                </a>
            </div>

            <div className="container_data" ref={targetRef} id="target" onClick={handleIconClick}>
                <h2>Data</h2>
            </div>
            
            <input
                onChange={(e) => setQuery(e.target.value)}
                type="text" 
                name="search" 
                placeholder="Search user"
            />

            {users.filter((user) => user.first_name.includes(query)).map((user, index) => (
                <div key={index}>
                    <h2>{user.first_name}</h2>
                    <p>{user.last_name}</p>
                    <p>{user.age}</p>
                </div>
            ))}
        </div>
    )
}

export default HomePage;