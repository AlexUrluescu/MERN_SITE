
import NavBar from "../components/NavBar";

import { useEffect } from "react";

import "../css/Create.css";


const MyPosts = ({userLogin, setUserLogin}) => {

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
    
                let userData = data.data;
                setUserLogin(userData);
                
                
            } catch (error) {
                console.log(error);
            }
        }
    
        sendData();
    
    }, [setUserLogin])

    console.log(userLogin);

  
    return(
        <div>
            <NavBar setUserLogin={setUserLogin}/>
                
                <h3>My Posts</h3>
  
            
        </div>
    )
}

export default MyPosts;