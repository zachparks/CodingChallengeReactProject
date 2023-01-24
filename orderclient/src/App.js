import React, { useState } from "react";
import Constants from "./utilities/Constants";
import OrderCreateForm from "./components/OrderCreateForm";
import './App.css';
import SearchBar from "./components/Search";
import BasicDropDown from "./components/DropDownMenu";


export default function App() {
  const [orders, setOrders] = useState([]);
  const [promptingCreateNewOrder, setpromptingCreateNewOrder] = useState(false);
  const [selected, setSelected] = useState("Choose an Order Type");
  //const [isChecked, setisChecked] = useState(false);


  //getOrders getting all the Orders in the DB to push them out to the table
  function getOrders() {
    const url = Constants.API_URL_GET_ALL_ORDERS;

    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(ordersFromServer => {
        setOrders(ordersFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }


  //deleteOrder for finding the specific order ID to delete the coresponding order Id
  function deleteOrder(orderId) {
    const url = `${Constants.API_URL_DELETE_ORDER_BY_ID}/${orderId}`;

    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(responseFromServer => {
        console.log(responseFromServer);
        onOrderDeleted(orderId);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex column justify-content-center align-items-center">
          {promptingCreateNewOrder === false && (
            <div>
              <h1>RedTech Coding Challenge</h1>

              <div class="navBar">
                <SearchBar />
                <BasicDropDown />
                <button onClick={getOrders} className="btn">Get Orders</button>
                <button onClick={() => setpromptingCreateNewOrder(true)} className="btn">Create New Order</button>
              </div>
            </div>
          )}
        </div>
        {getOrders()}
        {(promptingCreateNewOrder === false && orders.length > 0) && renderOrdersTable()}

        {promptingCreateNewOrder && <OrderCreateForm onOrderCreated={onOrderCreated} />}
      </div>
    </div>
  );


  //renderOrdersTable is just putting all the DB and API data in a table and making it look somewhat clean
  function renderOrdersTable() {
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col" className="column-headers"><input type="checkbox" aria-checked="false" role="all-checkbox" /></th>
              <th scope="col" className="column-headers">Order Id (PK)</th>
              <th scope="col" className="column-headers">Order Type </th>
              <th scope="col" className="column-headers">Customer Name </th>
              <th scope="col" className="column-headers">Created On </th>
              <th scope="col" className="column-headers">Created By </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <th scope="row">
                  <input type="checkbox" onClick={() => {
                    if (window.confirm('Are you sure you want to delete this order?')) deleteOrder(order.orderId)
                  }}
                    className="row-checkbox" />
                </th>
                <td>{order.orderId}</td>
                <td>{order.orderType}</td>
                <td>{order.customerName}</td>
                <td>{order.createdDate}</td>
                <td>{order.createdByUsername}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  //a funtion checking to see if an order was created
  function onOrderCreated(createdOrder) {
    setpromptingCreateNewOrder(false);

    if (createdOrder == null) {
      return;
    }

    alert('Order successfully created');

    getOrders();
  }

  //a function checking to make sure the order was deleted
  function onOrderDeleted(deltedOrderId) {
    let ordersCopy = [...orders];

    const index = ordersCopy.findIndex((ordersCopyOrders, currentIndex) => {
      if (ordersCopyOrders.orderId === deltedOrderId) {
        return true;
      }
    });

    if (index !== -1) {
      ordersCopy.splice(index, 1);
    }

    setOrders(ordersCopy);

    alert('Order Successfully Deleted');
  }
}
