import { PostForm, NotFoundPage, HomePage } from "./pages";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
   <div className="bg-neutral-900 text-white">
    <Routes>
      <Route path = '/' element = {<HomePage />} />
      <Route path = '/new' element = {<PostForm />} />
      <Route path = '*' element = {<NotFoundPage />} />
    </Routes>
   </div>
  );
}  

export default App;
