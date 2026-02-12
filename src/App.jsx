

import About from "./About"
import Home from "./Home"
import Navbar from "./pages/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Service from "./pages/Service";
import "./App.css"
import TodoList from "./pages/TodoList";
import Action from "./pages/Action";
import AnotherAction from "./pages/AnotherAction";
import { createContext } from "react";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Memo from "./pages/Memo";
export const UserContext = createContext();
function App(){

  // Props
let name = "John Doe";
let user ={name:"Shahid", age:30,}
 
  return (
    <>
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/about" element={<About /> }></Route>
  <Route path="/gallery" element={<Gallery /> }></Route>
  <Route path="/memo" element={<Memo /> }></Route>
  <Route path="/blog" element={<Blog /> }></Route>
  <Route path="/service" element={<Service /> }></Route>
  <Route path="/todo-list" element={<TodoList /> }></Route>
  <Route path="/action" element={<Action  data={name} /> }></Route>
  <Route path="/action-another" element={
    <UserContext.Provider value={user}>
    <AnotherAction  data={name}  /> 
    </UserContext.Provider>
    }></Route>
</Routes>
</BrowserRouter>

</>
  )
}


export default App