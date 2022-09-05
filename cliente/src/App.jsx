import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { AlumnList } from "./components/AlumnList";
import './styles/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={<AlumnList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
