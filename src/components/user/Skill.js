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
      color: this.props.content.color
    };
  }

  render() {
    const style =
      "card rounded overflow-hidden shadow-lg h-64 " + this.state.color;

    console.log("style....", style);
    return (
      <div className={style}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{this.state.title}</div>
          <div className="font-bold mb-2">{this.state.subtitle}</div>
          <p className="text-gray-700 text-base"> {this.state.desc}</p>
        </div>
      </div>
    );
  }
}

export default Skill;
