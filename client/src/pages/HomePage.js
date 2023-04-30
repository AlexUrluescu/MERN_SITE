
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";


const HomePage = () => {

    const [ users, setUsers ] = useState([]);
    const [ query, setQuery ] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:4000/register");
            const data = await res.json()

            console.log(data);
            setUsers(data)
        }

        fetchData()
    }, [])

    return(
        <div>
            <NavBar />
            <h2>Home page</h2>
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
            {/* {users.map((user, index) => (
                <div key={index}>
                    <h2>{user.first_name}</h2>
                    <p>{user.last_name}</p>
                    <p>{user.age}</p>
                </div>
            ))} */}
        </div>
    )
}

export default HomePage;