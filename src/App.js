import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { HomePage } from "./pages/homePage";
import MainTable  from "./tables/mainTable";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/tables" element={<MainTable/>} />
    </Routes>
    
  );
}

export default App;
