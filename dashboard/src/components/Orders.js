import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-clone-backend-805t.onrender.com/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
  <div className="orders">
    {allOrders.length === 0 ? (
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    ) : (
      <>
        <h3 className="title">Orders ({allOrders.length})</h3>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )}
  </div>
  );
};

export default Orders;
