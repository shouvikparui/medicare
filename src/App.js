import React from "react";
import "./App.css";
//import Navbar from "./components/Navbar";
import {  Router, Routes, Route } from "react-router-dom";
/* import Counter from "./components/Counter"
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import About from "./components/About"; */
// import { Container } from "postcss";
/* import Video from "./components/Video";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Tour from "./components/Tour";
import Footer from "./components/Footer";
import Landing from "./components/Pages/Landing"; */
import DBank from './DBank.jsx';
import SKILL from "./components/SKILL";



import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import Chart from "./Chart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chart/>}/>
       
      </Routes>
    </>
  );
}

export default App;