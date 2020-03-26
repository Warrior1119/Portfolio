import React, { Component } from "react";
import requireAuth from "../requireAuth";

class Admin extends Component {
  render() {
    return <div> This is the Admin!</div>;
  }
}

export default requireAuth(Admin);
