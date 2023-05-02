
import { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import UserContext from "../context/UserContext";


const HomePage = () => {

    const [ users, setUsers ] = useState([]);
    const [ query, setQuery ] = useState("");
    const {userLogin, setUserLogin} = useContext(UserContext)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:4000/register");
            const data = await res.json()

            console.log(data);
            setUsers(data)
        }

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

        fetchData()
    }, [])


    console.log(userLogin);

    return(
        <div>
            <NavBar />
            <h2>Home page</h2>
            <h2>{userLogin.first_name} {userLogin.last_name}</h2>
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