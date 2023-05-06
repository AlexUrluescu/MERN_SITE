import { Create, NotFoundPage, HomePage, Register, Login } from "./pages";
import {Routes, Route } from "react-router-dom";
import UserData from "./pages/UserData";
import { UserProvider } from "./context/UserContext";
import { useState } from "react";

// const initialJWT = {

// }


function App() {

  // const isLoggedIn = window.localStorage.getItem("loggedIn");

  const [ userLogin, setUserLogin ] = useState([])

  const handleUser = (data) => {
    setUserLogin(data)
  }

  // const hello = () => {
  //   alert("hello")
  // }

  return (
   <div>
    <UserProvider>
      <Routes>
        <Route path = '/' element = {<HomePage userLogin={userLogin} setUserLogin={setUserLogin} />} />
        <Route path="/register" element = {<Register />} />
        <Route path = '/create' element = {<Create userLogin={userLogin} handleUser={handleUser}/>} />
        <Route path='/login' element = {<Login setUserLogin={setUserLogin}/>}/>
        <Route path='/userData' element = {<UserData/>} />
        <Route path = '*' element = {<NotFoundPage />} />
      </Routes>
    </UserProvider>
   </div>
  );
}  

export default App;
