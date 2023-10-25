import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderMenu from "./components/HeaderMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderMenu />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<MyProfile />} />
        {/* <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/log-out" element={<Login logout={true} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
