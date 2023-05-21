
import NavBar from "../components/NavBar";

import { useState, useEffect } from "react";

import "../css/Create.css";

// const initialUser = {
//     id: ''
// }

const MyPosts = ({userLogin, setUserLogin}) => {

    const [myPosts, setMyPosts] = useState([])

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

                    const res2 = await fetch(`http://localhost:4000/myPosts/${userLogin._id}`)
                    const data2 = await res2.json();

                    console.log(data2);

                    setMyPosts(data2);
                
                
            } catch (error) {
                console.log(error);
            }
        }
    
        sendData();

    
    }, [setUserLogin, userLogin._id])

    console.log(userLogin);

  
    return(
        <div>
            <NavBar setUserLogin={setUserLogin}/>
                
                <h3>My Posts</h3>

                <div>
                    {myPosts.map((post) => (
                        <div key={post._id}>
                            <p>{post.subject}</p>
                            <p>{post.price}</p>
                        </div>
                    ))}
                </div>
  
            
        </div>
    )
}

export default MyPosts;