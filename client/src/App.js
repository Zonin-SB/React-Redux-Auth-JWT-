import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Admin from './Pages/AdminLogin';
import AdminHome from "./Pages/AdminHome";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/admin" element={<Admin/>}></Route>
        <Route exact path="/adminHome" element={<AdminHome/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
