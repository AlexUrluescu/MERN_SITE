

import { useState, useEffect } from "react";

const initialUser = {
    first_name: '',
    last_name: '',
    age: '',
    city: '',
    email: '',
    password: ''
}

const UserData = () => {

    const [ user, setUser ] = useState(initialUser)

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
                setUser(userData)
                
            } catch (error) {
                console.log(error);
            }
        }

        sendData();

    }, [])

    return(
        <div>
            <h2>Name {user.first_name}</h2>
            <h2>Email {user.email}</h2>
        </div>
    )
}

export default UserData;