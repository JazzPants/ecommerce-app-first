import React, { Component } from "react";
import ProductListShow from "../components/ProductListShow";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  //handleAddToCart
  //handleShowMore
  //handleShowStock
  //handleFilterCategory
  //handleFilterColour

  //fetch products
  //   async componentDidMount() {
  //     //wait for fetch, asynchronously
  //     //convert body "readable stream" into object array
  //     let response = await fetch("http://localhost:4000/products", {
  //       //promise. successful fetch then response = ...
  //       method: "GET",
  //     });
  //     //after receiving response, perofmr the following
  //     let object = await response.json(); //get readable stream data and convert from json format to object array
  //     this.setState({ products: object });

  //     console.log(object);

  //     // let promise = fetch("http://localhost:5000/products", { method: "GET" });
  //     // promise.then((response) => {
  //     //   console.log(response); //get response from server and print to console
  //     //   let promise2 = response.json(); //response converted from json object to javascript array object
  //     //   promise2.then((object) => {
  //     //     //get "products" object and print it
  //     //     console.log(object);
  //     //     this.setState({ products: object });
  //     //   });
  //     // });
  //     //javascript promise
  //     //when promise is resolved (GET is successful), then invoke arrow function
  //     //fetch data from data source
  //   }

  componentDidMount() {
    const fetchProducts = () => {
      fetch(`https://fakestoreapi.com/products/`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({
            products: data,
          });
          console.log(this.state);
        });
    };
    fetchProducts();
  }

  //   componentDidMount() {
  //     const fetchProducts = () => {
  //       fetch("https://fakestoreapi.com/products")
  //         .then((res) => res.json())
  //         .then((data) => console.log(data));
  //     };
  //     fetchProducts();
  //   }

  //render products

  //add nested route to one page product
  render() {
    return (
      <div>
        <p>Test Product Display: </p>
        <h4>Home - Shopping List</h4>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <ProductListShow key={product.id} product={product}>
                <button className="btn btn-primary">Add to Cart</button>
              </ProductListShow>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShoppingList;
