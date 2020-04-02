import React, { Component } from "react";
import "../../assets/css/User.css";

class Skill extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.content);
    this.state = {
      title: this.props.content.title,
      subtitle: this.props.content.subtitle,
      desc: this.props.content.desc,
      color: this.props.content.color,
      logo: this.props.content.logo,
      hover: false
    };
  }

  toggleHover = () => {
    console.log("over");
    this.setState({
      hover: !this.state.hover
    });
  };

  handleClick = () => {
    var prefix;
    if (this.state.title == "React.JS") {
      prefix = "react-js-development";
      // this.props.history.push(prefix);
    } else if (this.state.title == "React-Native") {
      prefix = "react-native-development";
    } else if (this.state.title == "Node.JS") {
      prefix = "node-js-development";
    } else {
      prefix = "cloud-services-development";
    }
    console.log("prefix...", prefix);
  };

  render() {
    const style =
      "card overflow-hidden cursor-pointer h-64 " +
      "hover:shadow-2xl " +
      "transition duration-700 ease-in-out transform hover:-translate-y-3 " +
      this.state.color;

    const logo = require("../../assets/image/" + this.state.logo);

    var arrorStyle;
    if (this.state.hover) {
      arrorStyle = { display: "block" };
    } else {
      arrorStyle = { display: "none" };
    }

    return (
      <div
        className={style}
        onClick={this.handleClick}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
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
          <div className="px-6 elem_link">
            <span className="font-bold underline">Learn more</span>
            <img
              src={require("../../assets/image/arrow.png")}
              width="40"
              height="40"
              className="pl-2"
              style={arrorStyle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
