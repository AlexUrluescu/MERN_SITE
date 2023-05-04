
import NavBar from "../components/NavBar";

import { useState, useEffect } from "react"

const initialPost = {
    subject: '',
    details: '',
    price: '',
    user_name: ''
}

const Create = () => {

    const [ post, setPost ] = useState(initialPost);
    const [ user, setUser ] = useState({});

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
                setUser(userData);
                
                
            } catch (error) {
                console.log(error);
            }
        }
    
        sendData();
    
    }, [])

    console.log(user);

    initialPost.user_name = user.last_name + ' ' + user.first_name;
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

        const res = await fetch("http://localhost:4000/posts", {
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
        }

    }

    return(
        <div>
            <NavBar />
            <div>
                <h2>Create a post</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={post.subject} type="text" placeholder="Subject" name="subject" />
                    <input onChange={handleChange} value={post.details} type="text" placeholder="Details" name="details"/>
                    <input onChange={handleChange} value={post.price} type="text" placeholder="Price" name="price"/>

                    <input type="submit" value="Create"/>
                </form>
            </div>
        </div>
    )
}

export default Create;