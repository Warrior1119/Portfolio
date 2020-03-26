import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../assets/main.css";
import "../assets/css/Header.css";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/admin">Admin</Link>
          <Link to="/signout">Sign Out</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="max-w rounded overflow-hidden shadow-lg flex justify-between p-8 header">
        <Link to="/" className="text-blue-900 text-3xl">
          Home
        </Link>

        <div className="text-blue-800 text-2x1 header">
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
export default connect(mapStateToProps)(Header);
