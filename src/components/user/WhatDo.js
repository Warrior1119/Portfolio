import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "../../assets/css/User.css";
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
        color: "reactjs",
        logo: "react.png"
      },

      React_Native: {
        title: "React-Native",
        subtitle: "iOS & Android apps",
        desc:
          "Jump start your mobile app development with the low-cost approach that's captured the hearts of iOS and Android developers alike.",
        color: "react-native",
        logo: "react.png"
      },

      Node: {
        title: "Node.JS",
        subtitle: "Backend development",
        desc:
          "Bring MVPs to life with a fast, scalable model that's lightweight and efficient. Perfect for real time, cross-device applications",
        color: "nodejs",
        logo: "nodejs-icon.svg"
      },

      Cloud_Services: {
        title: "Cloud Services",
        subtitle: "serverless solutions",
        desc:
          "Stay ahead of the curve with a secure, scalable and flexible solution that reduces your overheads while guaranteeing high performance",
        color: "cloud-services",
        logo: "cloud.png"
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
          <div className="title-wrap">
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

        <div className="my-16">
          <div className="flex justify-between">
            <Skill content={this.state.React} />

            <Skill content={this.state.React_Native} />
          </div>
          <div className="my-6 flex justify-between">
            <Skill content={this.state.Node} />

            <Skill content={this.state.Cloud_Services} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(WhatDo);
