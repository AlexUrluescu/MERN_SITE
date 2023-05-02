import { Create, NotFoundPage, HomePage, Register, Login} from "./pages";
import {Routes, Route } from "react-router-dom";
import UserData from "./pages/UserData";
import { UserProvider } from "./context/UserContext";

function App() {

  const isLoggedIn = window.localStorage.getItem("loggedIn")

  return (
   <div>
    <UserProvider>
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route path="/register" element = {<Register />} />
        <Route path = '/create' element = {<Create />} />
        <Route path='/login' element = {isLoggedIn ? <UserData /> : <Login />}/>
        <Route path='/userData' element = {<UserData/>} />
        <Route path = '*' element = {<NotFoundPage />} />
      </Routes>
    </UserProvider>
   </div>
  );
}  

export default App;
