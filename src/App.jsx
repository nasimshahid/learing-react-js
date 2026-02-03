

import About from "./About"
import Home from "./Home"
import Navbar from "./pages/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Service from "./pages/Service";
import "./App.css"
import TodoList from "./pages/TodoList";
function App(){
  return (
    <>
<BrowserRouter>
<Navbar />
<Routes>
   <Route path="/" element={<h1>home Pages</h1>}></Route>
  <Route path="/home" element={<Home />}></Route>
  <Route path="/about" element={<About /> }></Route>
  <Route path="/service" element={<Service /> }></Route>
  <Route path="/todo-list" element={<TodoList /> }></Route>
</Routes>
</BrowserRouter>

</>
  )
}


export default App