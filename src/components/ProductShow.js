import React, { Component } from "react";

class ProductShow extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-lg-6">
        <div className="card m-3">
          <div className="card-body">
            <div className="text-muted">#{this.props.id}</div>
            <h5 className="pt-5 border-top">{this.props.productName}</h5>
            <div>${this.props.price}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductShow;