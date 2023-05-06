
import { useState, useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import Loader from "../components/Loader";

// import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

import myImage from "../static/planeta.png"
import "../css/HomePage.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


const HomePage = ({userLogin , setUserLogin}) => {

    const targetRef = useRef(null);
  
    const [ posts, setPosts ] = useState([]);
    const [ query, setQuery ] = useState("");
    const [loaderStatus, setLoaderStatus] = useState()
    // const {userLogin, setUserLogin} = useContext(UserContext)

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
        

        const fetchPosts = async () => {

            try {
                setLoaderStatus(true);
                const res = await fetch("http://localhost:4000/posts");
                const data = await res.json();
    
                console.log(data);
                setPosts(data);
                setLoaderStatus(false);

            } catch (error) {
                console.log(error);
            }
           
        }

        
        fetchPosts();
        
        sendData();

    }, [setUserLogin])


    console.log(userLogin);
    console.log(userLogin.length);

    return(
        <div>
            {/* // eslint-disable-next-line */}
            <NavBar setUserLogin={setUserLogin}/>
            {/* // eslint-disable-next-line */}
            <div className="container_home">
                <div className="container_welcome">
                {/* // eslint-disable-next-line */}
                    {userLogin.length !== 0 ? <h1 className="welcome_h">Hello <b className="welcome_b">{userLogin.first_name} {userLogin.last_name}</b></h1>:<h1> </h1>}
                    <h1>Welcome in WebSchool</h1>
                    <p className="container_p">Here is the best place to self-learning</p>
                    <p>WebSchool is the best web learning platform</p>
                    {/* // eslint-disable-next-line */}
                    {userLogin.length !== 0 ? <h3> </h3>: <Link className="login_link" to="/login"> Login </Link>}
                </div>
                <div className="container_image">
                {/* // eslint-disable-next-line */}
                    <img src={myImage} alt=""/>
                </div>
            </div>
            <div className="container_arrow">
                <a href="#target" onClick={handleIconClick}>
                    <FontAwesomeIcon className="arrow_icon" icon={faArrowDown} size="2x" />
                </a>
            </div>

            <div className="container_data" ref={targetRef} id="target" onClick={handleIconClick}>
                <h2>Posts</h2>
                <div className="input_container">
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        type="text" 
                        name="search" 
                        placeholder="Search user"
                    />
                </div>

                {loaderStatus ? <Loader /> : <div className="posts_container">
                    {posts.filter((post) => post.subject.includes(query)).map((post, index) => (
                        <Post key={index} subject={post.subject} details={post.details} price={post.price} user_name={post.user_name}/>
                    ))}
                </div>}
                
            </div>  
        </div> 
    )
}

export default HomePage;