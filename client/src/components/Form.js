
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const user = {
    first_name: '',
    last_name: '',
    age: '',
    city: '',
    email: '',
    password: ''
}

const Form = () => {

    const [formData, setFormData] = useState(user);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:4000/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json()
            console.log(data);

            e.target.reset();
            setFormData(user);
            navigate("/");
            
        } catch (error) {
            console.log(error);
        }

    }

    const handleChange = async (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={formData.first_name} type="text" name="first_name" placeholder="First Name"/>
                <input onChange={handleChange} value={formData.last_name} type="text" name="last_name" placeholder="Last Name"/>
                <input onChange={handleChange} value={formData.age} type="text" name="age" placeholder="Age"/>
                <input onChange={handleChange} value={formData.city} type="text" name="city" placeholder="City"/>
                <input onChange={handleChange} value={formData.email} type="email" name="email" placeholder="Email"/>
                <input onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Password" />

                <input type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Form;