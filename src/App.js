import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route, Switch, useLocation} from 'react-router-dom';
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='#' element={<Home/>} />
        <Route path='/connect' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
