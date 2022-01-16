import React, { Component } from "react";

class ProductListShow extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   product: this.props.product,
    // };
  }

  render() {
    // console.log(this.props);
    return (
      // <div className="row">
      <div className="col-lg-6">
        <div className="card m-3">
          <div className="card-body">
            <div className="text-muted">#{this.props.product.id}</div>
            <h5 className="pt-2 border-top">{this.props.product.title}</h5>
            <div>${this.props.product.price}</div>
            <div>
              <img className="imgholder" src={this.props.product.image} />
            </div>
          </div>
          <div className="card-footer">
            <div className="float-start">
              <span className="badge bg-secondary">
                {this.props.product.quantity}
              </span>
            </div>
            {/* <div className="float-end">{this.props.children}</div> */}
            <button className="btn btn-primary float-end">Add to Cart</button>
          </div>
        </div>
      </div>
      // </div>
    );
  }
  //clean up phase
  //Executes when the current instance of the current component is being deleted from memory.
  // componentWillUnmount() {
  //   console.log("componentWillUnmount phase - ProductShow");
  // }
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

export default ProductListShow;
