import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Cart from "./cart";
import ProductsListPage from "./productsListPage";
import PageNotFound from "./pageNotFound";
import SingleProductPage from "./singleProductPage";
import Context from "./Context";

export default function ChangePage() {
  let styles = {
    marginLeft: "20px",
    textDecoration: "none",
    color: "black",
  };

  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Router>
      <Context.Provider value={{ data, setCart, cart }}>
        <div>
          <nav>
            <ul className="pages">
              <li>
                <Link style={styles} to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link style={styles} to="/cart">
                  Cart
                </Link>
              </li>
              <li></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/products">
              <ProductsListPage />
            </Route>
            <Route exact path="/product/:id">
              <SingleProductPage />
            </Route>
            <Route exact path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Context.Provider>
    </Router>
  );
}
