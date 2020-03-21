import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import ProductsList from "./components/products-list.component";
import CreateProduct from "./components/create-product.component";
import UpdateProduct from "./components/edit-product.component";
import Navbar from "./components/navbar.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ProductsList} />
      <Route path="/create" component={CreateProduct} />
      <Route path="/edit/:id" component={UpdateProduct} />
      </div>
    </Router>
  );
}

export default App;