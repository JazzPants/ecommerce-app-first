import React, { Component } from "react";
import ProductCartShow from "../components/ProductCartShow";

class ShoppingCart extends Component {
  constructor(props) {
    super(props); //calling the constructor of the parent class (APP.js), so we can retrieve props from it
    this.state = {
      products: [
        // { id: 1, productName: "iPhone", price: 5900, quantity: 1 },
        // { id: 2, productName: "Samsung Phone", price: 5750, quantity: 1 },
        // { id: 3, productName: "Sony PS4", price: 5900, quantity: 2 },
        // { id: 4, productName: "ASUS Monitor", price: 900, quantity: 1 },
        // { id: 5, productName: "Razer Laptop", price: 11700, quantity: 1 },
        // { id: 6, productName: "Logitech Keyboard", price: 450, quantity: 1 },
      ],
    };
  }

  //executes when user clicks the + button
  handleIncrement = (product, maxValue) => {
    // console.log("increment", product);
    //clone state
    //get index of product given by ProductShow
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    // console.log(allProducts[index]);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      //update state of ShoppingCart
      this.setState({
        products: allProducts,
      });
    }
  };

  handleDecrement = (product, minValue) => {
    // console.log("decrement", product);
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    // console.log(allProducts[index]);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      //update state of ShoppingCart
      this.setState({
        products: allProducts,
      });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    //confirmation window
    console.log(product.productName);
    //confirmation pop-up
    if (
      window.confirm(
        `Are you sure you want to remove ${product.productName} from your cart?`
      )
    )
      //delete product based on given index
      allProducts.splice(index, 1);
    //update state of ShoppingCart
    this.setState({
      products: allProducts,
    });
  };
  // first div className="container-fluid"
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <ProductCartShow
                key={product.id}
                product={product}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </ProductCartShow>
            );
          })}
        </div>
      </div>
    );
  }

  //Executes after constructor and render method (including complete life cycles of child components, if there are any) of any current component
  //for HTTP requests (fetch!!), let's page render first then performs any requests!
  //function performs async., statements will wait until the PROMISE (await fetch) is completed, and then they are exectued
  async componentDidMount() {
    //wait for fetch, asynchronously
    //convert body "readable stream" into object array
    let response = await fetch("http://localhost:4000/products", {
      //promise. successful fetch then response = ...
      method: "GET",
    });
    //after receiving response, perofmr the following
    let object = await response.json(); //get readable stream data and convert from json format to object array
    this.setState({ products: object });

    console.log(object);

    // let promise = fetch("http://localhost:5000/products", { method: "GET" });
    // promise.then((response) => {
    //   console.log(response); //get response from server and print to console
    //   let promise2 = response.json(); //response converted from json object to javascript array object
    //   promise2.then((object) => {
    //     //get "products" object and print it
    //     console.log(object);
    //     this.setState({ products: object });
    //   });
    // });
    //javascript promise
    //when promise is resolved (GET is successful), then invoke arrow function
    //fetch data from data source
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log(
  //       "componentDidUpate",
  //       prevProps,
  //       prevState,
  //       this.props,
  //       this.state
  //     );
  //   } //render the componentDidUpdate

  componentWillUnmount() {
    console.log("componentWillUnmount phase - ShoppingCart");
  }
}

//use this condition to make http calls e.g.
//if (prevProps.x === this.props.x) {
//make http call
//}

//componentWillUnmount
//cancel http requests
//when there's a change of route
//when a Parent deletes a child component

//each ProductShow component contains a prop with the product object which contains info on the product,
//in the child, this product passed back up in an onClick callback function, this.state.product is the exact product given as an argument to the decrement/increment functions
//parents can pass either props and HTML elements(content such as the button) to children, you must render them in the child to make them appear
// id={product.id}
// productName={product.productName}
// price={product.price}
//product prop is an object (each product in the products array is an object!)

export default ShoppingCart;
