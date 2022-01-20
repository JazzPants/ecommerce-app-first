import React, { Component } from "react";

class ProductFocus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    return (
      <div>
        <h2>More details on Product:</h2>
      </div>
    );
  }
}

export default ProductFocus;
