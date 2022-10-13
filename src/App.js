import  React from "react";
import "./Components/Formheader";
import Header from "./Components/Header.js";
import Template from "./Components/Template.js";
import Mainbody from "./Components/Mainbody.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Formheader from "./Components/Formheader";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/survey_form/:id">
            <Formheader/>
          </Route>
          <Route path="/">
            <Header/>
            <Template/>
            <Mainbody/>
          </Route>
        </Switch>
      </Router>
    
    </div>
  )
}

export default App;