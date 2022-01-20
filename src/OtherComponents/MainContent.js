import React from "react";

class MainContent extends React.Component {
  state = {
    pageTitle: "Customers",
    customerCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "",
        address: { city: "New Delhi" },
        photo: "",
      },
      {
        id: 2,
        name: "Alex",
        phone: null,
        address: { city: "Tokyo" },
        photo: "https://picsum.photos/id/237/60",
      },
      {
        id: 3,
        name: "May",
        phone: "564-521",
        address: { city: "London" },
        photo: "https://picsum.photos/id/237/60",
      },
      {
        id: 4,
        name: "Julie",
        phone: "891-321",
        address: { city: "Melbourne" },
        photo: "https://picsum.photos/id/237/60",
      },
      {
        id: 5,
        name: "John",
        phone: "581-136",
        address: { city: "New York" },
        photo: "https://picsum.photos/id/237/60",
      },
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
              <th>Avatar</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
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

  getPhoneToRender = (phone) => {
    return phone ? (
      phone
    ) : (
      <div className="bg-warning p-1 text-center">No phone number</div>
    );
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer Profile Image" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  //arrow function referring to callback WITH argument
  onChangePictureClick = (customer, index) => {
    console.log(customer);
    console.log(index); //array index
    let custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/55/60";
    this.setState({ customers: custArr });
  };
}

// className={this.customerNameStyle(cust.name)}
// customerNameStyle = (custName) => {
//     if (custName.startsWith("S")) return "green-highlight border-left";
//     else if (custName.startsWith("J")) return "red-highlight border-right";
//     else return {}; //return blank -> no style
//   };

export default MainContent;
