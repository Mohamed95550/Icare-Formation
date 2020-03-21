import React, { Component } from 'react';
import axios from 'axios';

export default class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeMarque = this.onChangeMarque.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeImages = this.onChangeImages.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {     
        title: '',
        marque:'',
        description: '',
        price: '',
        stock: '',
        images: ''
    }
  }
  
  componentDidMount(id){
    axios.get('http://localhost:5000/products/'+this.props.match.params.id)
    .then(response => {
      this.setState({ 
          title : response.data.title,
          marque : response.data.marque,
          description : response.data.description,
          price : response.data.price,
          stock : response.data.stock,
          images : response.data.images
        })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeMarque(e) {
    this.setState({
      marque: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }
  
  onChangeStock(e) {
    this.setState({
      stock: e.target.value
    })
  }
  
  onChangeImages(e) {
    this.setState({
      images: e.target.value
    })
  }
goToHome(e){
    window.location('/');
}
  onSubmit(e) {
    e.preventDefault();
    const product = {
      title: this.state.title,
      marque :this.state.marque,
      description: this.state.description,
      price: this.state.price,
      stock: this.state.stock,
      images: this.state.images
    }

    console.log(product);

    axios.post('http://localhost:5000/products/update/'+this.props.match.params.id, product)
    .then(res => console.log(res.data));
   window.location = '/';
}

  render() {
    return (
    <div>
      <h3>Update this product:</h3>
      <form onSubmit={this.onSubmit}>
        <div className="row">
                <div className="form-group col-6"> 
                <label>Title :</label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
                </div>
                <div className="form-group col-6">
                <label>Marque :</label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.marque}
                    onChange={this.onChangeMarque}
                    />
                </div>
        </div>
        <div className="row">
                <div className="form-group col-12"> 
                <label>Description :</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                </div>
        </div>              
        
        <div className="row">
                <div className="form-group col-6"> 
                <label>Price :</label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                    />
                </div>
                <div className="form-group col-6"> 
                <label>Stock :</label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.stock}
                    onChange={this.onChangeStock}
                    />
                </div>
        </div>
        <div className="row">
                <div className="form-group col-12"> 
                <label>Images :</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.images}
                        onChange={this.onChangeImages}
                        />
                  </div>
        </div>    
        <div className="row"> 
                <div className="form-group col-8" >  
                </div>
                <div className="form-group col-2" >
                    <input type="submit" value="Update this Product" className="btn btn-warning" />
                </div>
                <div className="form-group col-2" >
                    <input type="submit" value="Annuler" className="btn btn-primary" onClick={this.goToHome} />
                </div>
               
        </div>              
      </form>
    </div>
    )
  }
  
}