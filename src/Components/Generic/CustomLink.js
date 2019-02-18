import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./CustomLink.css";

class CustomLink extends React.Component {
  render() {
    return (
      <Link
        className={
          this.props.location.pathname.includes("/" + this.props.cont)
            ? this.props.activeClass
            : this.props.regularClass
        }
        to={(this.props.subrouter ? "/" + this.props.subrouter : "") + "/" + this.props.to}
      >
        {this.props.children}
      </Link>
    );
  }
}

export default withRouter(CustomLink);