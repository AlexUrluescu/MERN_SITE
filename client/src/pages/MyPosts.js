
import NavBar from "../components/NavBar";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Post from "../components/Post";
import PostEdit from "../components/PostEdit";

import "../css/myPosts.css";

const initialForm = {
    subject: '',
    details: '',
    price: ''
}

const MyPosts = ({userLogin, setUserLogin}) => {

    const [myPosts, setMyPosts] = useState([])
    const [formData, setFormData] = useState(initialForm)
    const [postEdit, setPostEdit] = useState('')

    const navigate = useNavigate();

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

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    }

    const handleClick = async (e) => {
        // e.preventDefault()
        
        const subject = formData.subject
        const details = formData.details;
        const price = formData.price;


        const data = await fetch(`http://localhost:4000/posts/${postEdit}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({subject, details, price})
        })


        const raspuns = await data.json()
        console.log(raspuns);

        // window.location.reload();
        navigate('/myposts')

        
    }
  
    return(
        <div>
            <NavBar setUserLogin={setUserLogin}/>
                

                <div className="container_all">
                    {userLogin.length === 0 ? <div><h2>NU ESTI LOGAT</h2></div> : <h2></h2>}
                    <div className="container_posts">
                        {myPosts.map((post, index) => (
                        <PostEdit key={index} setPostEdit = {setPostEdit} setFormData = {setFormData} id = {post._id} subject={post.subject} details={post.details} price={post.price} user_name={post.user_name}/>
                        ))}
                    </div>
                    <div className="myPosts_form">
                        <form onSubmit={handleClick} className="formular">
                            <label>Subject</label>
                            <input onChange={handleChange} value={formData.subject} name="subject" type="text" placeholder="Subject"/>
                            <label>Details</label>
                            <input onChange={handleChange} value={formData.details} name="details" type="text" placeholder="Details"/>
                            <label>Price</label>
                            <input onChange={handleChange} value={formData.price} name="price"  type="text" placeholder="Price"/>

                            <input id="link_edit" type="submit" value="Send"/>
                            {/* <input onClick={handleTest} type="button" value="test"/> */}
                        </form>
                    </div>

                </div>
  
            
        </div>
    )
}

export default MyPosts;