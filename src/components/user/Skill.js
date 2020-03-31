import React, { Component } from "react";
import "../../assets/css/MainSkill.css";

class Skill extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.content);
    this.state = {
      title: this.props.content.title,
      subtitle: this.props.content.subtitle,
      desc: this.props.content.desc,
      color: this.props.content.color,
      logo: this.props.content.logo
    };
  }

  render() {
    const style =
      "card overflow-hidden cursor-pointer h-64 " +
      "hover:shadow-2xl " +
      "transition duration-700 ease-in-out transform hover:-translate-y-5 " +
      this.state.color;

    const logo = require("../../assets/image/" + this.state.logo);

    return (
      <div className={style}>
        <div className="px-6 py-4">
          <div className="px-6 py-4">
            <div className="head_wrap">
              <div className="logo_wrap">
                <img src={logo} width="50" height="50" />
              </div>
              <div className="text_wrap">
                <div className="font-bold text-2xl">{this.state.title}</div>
                <div>{this.state.subtitle}</div>
              </div>
            </div>
            <div className="text-base my-3"> {this.state.desc}</div>
          </div>
          <div className="px-6 py-4 elem_link">
            <span className="font-bold underline">Learn more</span>
            <img
              src={require("../../assets/image/arrow.png")}
              width="40"
              height="40"
              className="pl-2 transition duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
