import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
 import {BrowserRouter, Switch, Route, Redirect, withRouter} from "react-router-dom";

const App = () => {
  return (
    <div>
    <BrowserRouter>

    <Navbar />

    <Switch>
      <Route exact path="/about" component={(About)} />// component vala same to same hona page k
<Route exact path="/" component={(Home)} />
<Route exact path="/Contacts" component={(Contact)} />

<Route exact path="/services" component={(Services)} />

</Switch>
</BrowserRouter>
<Footer/>
    </div>
  );
}

export default App;
