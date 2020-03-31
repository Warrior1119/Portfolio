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
      "card overflow-hidden cursor-pointer h-64 " +
      "hover:shadow-2xl " +
      "transition duration-700 ease-in-out transform hover:-translate-y-5 " +
      this.state.color;

    return (
      <div className={style}>
        <div className="px-6 py-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{this.state.title}</div>
            <div className="font-bold mb-2">{this.state.subtitle}</div>
            <p className="text-base"> {this.state.desc}</p>
          </div>
          <div className="px-6 py-4">
            <a href="#">
              <strong> Learn more</strong>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
