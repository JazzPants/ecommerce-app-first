import React, { Component } from "react";
import ProductShow from "../components/ProductShow";

class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 5900, quantity: 1 },
      { id: 2, productName: "Samsung Phone", price: 5750, quantity: 1 },
      { id: 3, productName: "Sony PS4", price: 5900, quantity: 2 },
      { id: 4, productName: "ASUS Monitor", price: 900, quantity: 1 },
      { id: 5, productName: "Razer Laptop", price: 11700, quantity: 1 },
      { id: 6, productName: "Logitech Keyboard", price: 450, quantity: 1 },
    ],
  };
  //executes when user clicks the + button
  handleIncrement = (product, maxValue) => {
    // console.log("increment", product);
    //clone state
    //get index of product given by ProductShow
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    console.log(allProducts[index]);
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
    console.log(allProducts[index]);
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

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <ProductShow
                key={product.id}
                product={product}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </ProductShow>
            );
          })}
        </div>
      </div>
    );
  }
}
//each ProductShow component contains a prop with the product object which contains info on the product,
//in the child, this product passed back up in an onClick callback function, this.state.product is the exact product given as an argument to the decrement/increment functions
//parents can pass either props and HTML elements(content such as the button) to children, you must render them in the child to make them appear
// id={product.id}
// productName={product.productName}
// price={product.price}
//product prop is an object (each product in the products array is an object!)

export default ShoppingCart;
