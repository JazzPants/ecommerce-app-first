import React, { Component } from "react";

class ProductCartShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    // console.log(this.props);
    return (
      // <div className="row">
      <div className="col-lg-6">
        <div className="card m-3">
          <div className="card-body">
            <div className="text-muted">
              #{this.state.product.id}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price}</div>
          </div>
          <div className="card-footer">
            <div className="float-start">
              <span className="badge bg-secondary">
                {this.state.product.quantity}
              </span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 5);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="float-end">{this.props.children}</div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
  //clean up phase
  //Executes when the current instance of the current component is being deleted from memory.
  componentWillUnmount() {
    // console.log("componentWillUnmount phase - ProductShow");
  }
}
//advantage: make changes to state in child, without affecting parent
//two arguments in + and - functions, second argument are max/min for quantity
//supplying individual properties if you want to hide info from child e.g.
// state = {
//     id: this.props.product.id,
//     productName: this.props.product.productName,
//   };

//HIDDEN
//     price: this.props.product.price,
//     quantity: this.props.product.quantity,

export default ProductCartShow;
