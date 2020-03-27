import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Lottie from "react-lottie";

import "../../assets/main.css";
import animationData from "../../assets/json/premium.json";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Senior Full-Stack Software Engineer"
    };
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div className="container">
        <div className="flex mb-4">
          <div className="w-2/3 h-12 my-20">
            <strong className="text-6xl">{this.props.title}</strong>
            <div className="w-2/3">
              <p className="text-2xl my-10"> {this.props.description} </p>
            </div>

            <div className="my-20 w-2/3">
              <button
                class="
                    w-48 
                    bg-red-600 
                    hover:bg-transparent 
                    text-white 
                    hover:text-red-500 
                    border border-white-500 
                    hover:border-red-500  
                    font-bold 
                    py-2 
                    px-4 
                    rounded-full
              "
              >
                Button
              </button>
              <button class="w-48 bg-transparent hover:bg-red-600 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full mx-10">
                Button
              </button>
            </div>
          </div>
          <div className="w-1/3 h-12">
            <Lottie options={defaultOptions} height={650} width={650} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.intro.title,
    description: state.intro.description
  };
}

export default connect(mapStateToProps, actions)(Intro);
