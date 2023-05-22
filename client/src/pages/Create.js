
import NavBar from "../components/NavBar";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../css/Create.css";

const initialPost = {
    subject: '',
    details: '',
    price: '',
    user_name: '',
    id_user: ''
}

const Create = ({userLogin, setUserLogin}) => {

    const [ post, setPost ] = useState(initialPost);

    const navigate = useNavigate();

    useEffect(() => {
        
        const sendData = async () => {
            try {
                const res = await fetch("https://mernstite.onrender.com/userData", {
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

    initialPost.user_name = userLogin.last_name + ' ' + userLogin.first_name;
    initialPost.id_user = userLogin._id;
    console.log(initialPost);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setPost((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(post);

        const res = await fetch("https://mernstite.onrender.com/posts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
        });

        const data = await res.json();
        console.log(data);

        if(data.status === "ok"){
            console.log('Post created succesfully');
            setPost(initialPost)
            navigate("/")

        }

        else if(data.status === "error"){
            alert("Nu esti logat")
        }

    }

    return(
        <div>
            <NavBar setUserLogin={setUserLogin}/>
            <div className="create_container">
                <div className="create_box">
                    <div>
                        <h2>Create a post</h2>
                    </div>
                    <div className="create_form">
                        <form className="form_cont" onSubmit={handleSubmit}>
                            <input onChange={handleChange} value={post.subject} type="text" placeholder="Subject" name="subject" />
                            <textarea onChange={handleChange} value={post.details} type="text" placeholder="Details" name="details"/>
                            <input onChange={handleChange} value={post.price} type="text" placeholder="Price" name="price"/>

                            <button className="btn_create" type="submit"><b>Create</b></button>
                        </form>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Create;