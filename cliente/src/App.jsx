import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/alumnos" element={<MainContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
