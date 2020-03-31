import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "../../assets/css/MainSkill.css";
import Skill from "./Skill";

class WhatDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      React: {
        title: "React.JS",
        subtitle: "Front-end development",
        desc:
          "Join the likes of Instagram, WhatsApp and Facebook in creating a beautiful user interface that benefits from both speed and simplicity.",
        color: "bg-reactjs"
      },
      React_Native: {
        title: "React-Native",
        subtitle: "iOS & Android apps",
        desc:
          "Jump start your mobile app development with the low-cost approach that's captured the hearts of iOS and Android developers alike.",
        color: "bg-blue-700"
      }
    };
  }
  handleReactJSClick = () => {
    console.log("React");
  };
  render() {
    return (
      <div className="container">
        <div className="w-full">
          <p className="text-xl">What I do</p>
          <div className="what_I_do">
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

        <div className="my-16 skill-set">
          <a onClick={this.handleReactJSClick}>
            <Skill content={this.state.React} />
          </a>
          <a onClick={this.handleReactJSClick}>
            <Skill content={this.state.React_Native} />
          </a>
        </div>
        {/* <div className="my-16 skill-set">
          <a onClick={this.handleReactJSClick}>
            <Skill />
          </a>
          <a onClick={this.handleReactJSClick}>
            <Skill />
          </a>
        </div> */}
      </div>
    );
  }
}

export default connect(null, actions)(WhatDo);
