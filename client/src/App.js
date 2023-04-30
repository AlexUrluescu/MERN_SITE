import { Create, NotFoundPage, HomePage, Register } from "./pages";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
   <div>
    <Routes>
      <Route path = '/' element = {<HomePage />} />
      <Route path="/register" element = {<Register />} />
      <Route path = '/create' element = {<Create />} />
      <Route path = '*' element = {<NotFoundPage />} />
    </Routes>
   </div>
  );
}  

export default App;
