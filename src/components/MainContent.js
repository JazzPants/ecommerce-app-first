import React from "react";

class MainContent extends React.Component {
  state = {
    pageTitle: "Customers",
    customerCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "New Delhi" },
      },
      { id: 2, name: "Alex", phone: "345-632", address: { city: "Tokyo" } },
      { id: 3, name: "May", phone: "564-521", address: { city: "London" } },
      {
        id: 4,
        name: "Julie",
        phone: "891-321",
        address: { city: "Melbourne" },
      },
      { id: 5, name: "John", phone: "581-136", address: { city: "New York" } },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customerCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    console.log("Refresh button clicked");
    this.setState({
      customerCount: 7,
    });
  };
}

export default MainContent;
