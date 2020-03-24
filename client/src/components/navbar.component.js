import React, { Component } from 'react';
import { Link } from 'react-router-dom';  	

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg" id="navbar">
       
        <Link to="/" className="navbar-brand" id="logo">Icare</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Store</Link>
          </li>
          <li className="navbar-item">
          <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="navbar-item">
          <Link to="/categories" className="nav-link">Categories</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="navbar-item">
          <Link to="/contact" className="nav-link">Contact us</Link>
          </li>
        </ul>
        <input  type="text" id="searching"
                            required
                            placeholder="Searching.."
                    />
        <span className="badge badge-pill badge-info" id="notif" onClick={
            ()=>{console.log("pas de notifications")}
        }>Caddie 0</span>
        <div className="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" className="btn btn-outline-info dropdown-toggle" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Account
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="#">Register</a>
                <a className="dropdown-item" href="#">login in</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}