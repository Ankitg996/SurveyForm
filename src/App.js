import  React from "react";
import "./Components/Formheader";
import Homepage from './Components/Homepage.js'
import { Routes, Route } from "react-router-dom";
import Formheader from "./Components/Formheader";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage/>}>  </Route>
        <Route path="/survey_form/:id" element={<Formheader/>}>  </Route>
      </Routes>   
    </div>
  )
}

export default App;