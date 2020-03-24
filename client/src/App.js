import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import StoreInLine from "./components/store-in-line.component";
import ProductsList from "./components/products-list.component";
import CreateProduct from "./components/create-product.component";
import UpdateProduct from "./components/edit-product.component";
import ContactUS from "./components/contact.component";
import Navbar from "./components/navbar.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={StoreInLine} />
      <Route path="/products" exact component={ProductsList} />
      <Route path="/create" exact component={CreateProduct} />
      <Route path="/edit/:id" exact component={UpdateProduct} />
      <Route path="/contact" exact component={ContactUS} />
     
     
      </div>
    </Router>
  );
}

export default App;