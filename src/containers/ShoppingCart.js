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

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <ProductShow
                key={product.id}
                id={product.id}
                productName={product.productName}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
