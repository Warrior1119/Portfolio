import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import ReactJS from "./MainSkills/ReactJS";

class MainSkill extends Component {
  handleReactJSClick = () => {
    console.log("React");
  };
  render() {
    return (
      <div className="container">
        <div className="w-full">
          <p className="text-xl">What I do</p>
          <div className="header">
            <div className="desc">
              I use the latest technologies to power your success.
            </div>
            <ul className="categories">
              <li> Mobile </li>
              <li> UI/UX </li>
              <li> FRONT/BACKEND </li>
            </ul>
          </div>
        </div>

        <div className="my-16 skill-set flex">
          <a onClick={this.handleReactJSClick}>
            <ReactJS />
          </a>
          <a onClick={this.handleReactJSClick}>
            <ReactJS />
          </a>
        </div>
        <div className="my-16 skill-set">
          <a onClick={this.handleReactJSClick}>
            <ReactJS />
          </a>
          <a onClick={this.handleReactJSClick}>
            <ReactJS />
          </a>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(MainSkill);
