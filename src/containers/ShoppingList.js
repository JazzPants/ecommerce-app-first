import React, { Component, useState, useEffect } from "react";
import ProductListShow from "../components/ProductListShow";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      selectedCategory: "allproducts",
      url: `https://fakestoreapi.com/products/`,
    };
  }

  //   https://fakestoreapi.com/products/category/jewelery

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

  //   https://fakestoreapi.com/products/
  fetchProducts = () => {
    fetch(this.state.url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          products: [...data],
        });
        console.log(this.state.products);
      });
  };

  fetchCategories = () => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          categories: data,
        });
        //   console.log(this.state.categories);
      });
  };
  componentDidMount() {
    //this.state.url
    this.fetchProducts();
    this.fetchCategories();
  }
  //   handleFilterCategory(e) {
  //     console.log(e.target.value);
  //     // let value = e.options[e.selectedIndex].value;
  //     // console.log(value);
  //     // if (e.target.value === "All Products") {
  //     //   this.setState({
  //     //     category: "",
  //     //   });
  //     // } else
  //     //   this.setState({
  //     //     category: e.target.value,
  //     //   });
  //   }

  //   componentDidUpdate() {
  //     console.log(this.state.url);
  //     console.log(this.state.selectedCategory);
  //     // const fetchProducts = () => {
  //     //   fetch(this.state.url)
  //     //     .then((res) => res.json())
  //     //     .then((data) => {
  //     //       console.log(data);
  //     //       this.setState({
  //     //         products: data,
  //     //       });
  //     //       //   console.log(this.state.products);
  //     //     });
  //     // };
  //     // fetchProducts();
  //   }
  handleChange = (event) => {
    let urlContainer;

    if (event.target.value === "allproducts") {
      this.setState({
        selectedCategory: event.target.value,
        url: `https://fakestoreapi.com/products/`,
      });
      urlContainer = `https://fakestoreapi.com/products/`;
      const fetchNewProducts = () => {
        fetch(urlContainer)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            this.setState({
              products: data,
            });
          });
      };
      fetchNewProducts();
    } else if (event.target.value === "men's clothing") {
      this.setState({
        selectedCategory: event.target.value,
        url: `https://fakestoreapi.com/products/category/men's%20clothing`,
      });
      urlContainer = `https://fakestoreapi.com/products/category/men's%20clothing`;
      const fetchNewProducts = () => {
        fetch(urlContainer)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            this.setState({
              products: data,
            });
          });
      };
      fetchNewProducts();
    } else if (event.target.value === "women's clothing") {
      this.setState({
        selectedCategory: event.target.value,
        url: `https://fakestoreapi.com/products/category/women's%20clothing`,
      });
      urlContainer = `https://fakestoreapi.com/products/category/women's%20clothing`;
      const fetchNewProducts = () => {
        fetch(urlContainer)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            this.setState({
              products: data,
            });
          });
      };
      fetchNewProducts();
    } else {
      this.setState({
        selectedCategory: event.target.value,
        url: `https://fakestoreapi.com/products/category/${event.target.value}`,
      });
      let newURL = `https://fakestoreapi.com/products/category/${event.target.value}`;
      const fetchNewProducts = () => {
        fetch(newURL)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            this.setState({
              products: data,
            });
          });
      };
      fetchNewProducts();
    }
  };

  //   componentDidUpdate(prevState) {
  //     // console.log("componentDidUpdate");
  //     if (this.state.url !== prevState.url) {
  //       console.log("hello");
  //     }
  //   }

  // if (this.state.selectedCategory === "allproducts") {
  //   this.setState({
  //     selectedCategory: "allproducts",
  //     url: `https://fakestoreapi.com/products/`,
  //   });
  // } else {
  //   this.setState({
  //     selectedCategory: event.target.value,
  //     url: `https://fakestoreapi.com/products/category/${event.target.value}`,
  //   });
  // }

  //handleFilterCategory
  //handleFilterColour
  //handleAddToCart
  //handleShowMore
  //handleShowStock

  //render products

  //add nested route to one page product
  render() {
    return (
      <div>
        <select
          className="form-select"
          //   value="jewelery"
          onChange={this.handleChange}
        >
          <option value="allproducts">All products</option>
          {this.state.categories.map((category, i) => {
            return (
              <option key={i} value={category}>
                {category}
              </option>
            );
          })}
        </select>

        <h4>Home - Shopping List</h4>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <ProductListShow
                key={product.id}
                product={product}
              ></ProductListShow>
            );
          })}
        </div>
      </div>
    );
  }
}

{
  /* <select
className="form-select"
aria-label="Default select example"
onClick={this.handleFilterCategory}
value={}
>
<option selected>Open this select menu</option>
<option value="1">Electronics</option>
<option value="2">Jewelery</option>
<option value="3">Three</option>
<option value="3">Three</option>
</select> */
}

export default ShoppingList;
