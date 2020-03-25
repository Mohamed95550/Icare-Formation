import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';

export default class Navbar extends Component {


  onSearching(e){
    let value = e.target.value;
   if(value){
      console.log('pas de resulats');
  }
   axios.get('http://localhost:5000/products/searching/'+value)
   .then(response => {
     //this.setState({ products: response.data })
     console.log(response.data);
   })
   .catch((error) => {
     console.log(error);
   })
  }
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
          <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="navbar-item">
          <Link to="/contact" className="nav-link">Contact us</Link>
          </li>
        </ul>  
       
        <input   type="search" id="searching"
                            required
                            placeholder="Searching.."
                            onChange={this.onSearching}
                    />
         <div className="dropdown-caddie">   
          <span className="badge badge-pill badge-info" id="notif" onClick={
            ()=>{console.log("pas de notifications")}
        }>Caddie 0</span>
              <div className="dropdown-content-caddie">
                  <a href="#">Empty</a>
              </div>
          </div>
         
          <div className="dropdown">
          <button type="button" className="btn btn-outline-info dropdown-toggle" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Account
            </button>
              <div className="dropdown-content">
                  <a href="./register">Register</a>
                  <a href="./localauth">Login</a>
                  <a href="http://localhost:5000/auth/google">Google</a>
              </div>
          </div>

        </div>
      </nav>
    );
  }
}