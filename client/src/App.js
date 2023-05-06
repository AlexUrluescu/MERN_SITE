import { Create, NotFoundPage, HomePage, Register, Login } from "./pages";
import {Routes, Route } from "react-router-dom";
import UserData from "./pages/UserData";
import { useState } from "react";


function App() {

  // const isLoggedIn = window.localStorage.getItem("loggedIn");

  const [ userLogin, setUserLogin ] = useState([])

  // const handleUser = (data) => {
  //   setUserLogin(data)
  // }


  return (
   <div>
      <Routes>
        <Route path = '/' element = {<HomePage userLogin={userLogin} setUserLogin={setUserLogin} />} />
        <Route path="/register" element = {<Register />} />
        <Route path = '/create' element = {<Create userLogin={userLogin} setUserLogin={setUserLogin}/>} />
        <Route path='/login' element = {<Login setUserLogin={setUserLogin}/>}/>
        <Route path='/userData' element = {<UserData/>} />
        <Route path = '*' element = {<NotFoundPage />} />
      </Routes>
   </div>
  );
}  

export default App;
