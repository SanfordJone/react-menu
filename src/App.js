// Import necessary dependencies and styles
// import logo from './logo.svg';
import './App.css';
import React from "react";
import {  Route, Routes } from "react-router-dom";
// import { useState } from 'react';

// Import your page components
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


const list=[{name:'Sam',password:'Sam@1234'},{name:'shravan',password:'Shravan123!'}]


// Define your main App component
function App() {
  return (
    // Use the <Routes> component to set up routing in your app
    <Routes>
      {/* Define routes for different paths */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login list={list}/>} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

// Export the App component as the default export
export default App;
