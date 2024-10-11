import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

export default function App() {
  return (
  
    <div className="">
    <Navbar />
    <Home />
   <About/>
    </div>
   
  )
}