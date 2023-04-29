
import { useState, useEffect } from "react";

const HomePage = () => {

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:4000/posts");
            const data = await res.json()

            console.log(data);
        }

        fetchData()
    }, [])

    return(
        <div>
            <h2>Home page</h2>
        </div>
    )
}

export default HomePage;