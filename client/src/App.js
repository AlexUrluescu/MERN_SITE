import { Create, NotFoundPage, HomePage, Register, Login} from "./pages";
import {Routes, Route } from "react-router-dom";
import UserData from "./pages/UserData";

function App() {
  return (
   <div>
    <Routes>
      <Route path = '/' element = {<HomePage />} />
      <Route path="/register" element = {<Register />} />
      <Route path = '/create' element = {<Create />} />
      <Route path='/login' element = {<Login/>}/>
      <Route path='/userData' element = {<UserData/>} />
      <Route path = '*' element = {<NotFoundPage />} />
    </Routes>
   </div>
  );
}  

export default App;
