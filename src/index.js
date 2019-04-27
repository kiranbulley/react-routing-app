import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Products from "./Component/Products";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Pagenotfound from "./Component/Pagenotfound";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Products" component={Products} />
      <Route path="/Services" component={Services} />
      <Route component={Pagenotfound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
