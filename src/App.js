import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
        <Menu/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path={"users"} element={<Users/>}/>
        <Route path={"contact"} element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
