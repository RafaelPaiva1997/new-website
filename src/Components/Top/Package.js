import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import App from "./App";

export default class Package extends React.Component {
  render() {
    return (
      <CookiesProvider>
        <Router>
          <App />
        </Router>
      </CookiesProvider>
    );
  }
}