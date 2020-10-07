import React from 'react';
import './App.css';
import {NavLink, BrowserRouter } from  "react-router-dom";



function Navbar() {
  return (
    <div >
    <BrowserRouter>
    <div className="container-fluid nav_bg">
      <div className="row">
    <div className="col-10 mx-auto">


    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink exact
  className="navbar-brand" to ="/">Gupta Technical</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName="menu_active"
        exact className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink activeClassName="menu_active"
        exact className="nav-link" to="/Contacts">Contacts <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active"
        exact className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink activeClassName="menu_active"
        exact className="nav-link" to="/services">Services <span class="sr-only">(current)</span></NavLink>
      </li>
    </ul>
  </div>
</nav>
</div>
</div>

</div>
</BrowserRouter>
    </div>
  );
}

export default Navbar;
