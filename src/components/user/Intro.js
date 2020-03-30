import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Lottie from "react-lottie";

import "../../assets/main.css";
import linkedin from "../../assets/json/linkedin.json";
import facebook from "../../assets/json/facebook.json";
import twitter from "../../assets/json/twitter-lotti.json";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Senior Full-Stack Software Engineer",
      height: props.height
    };
  }

  componentWillMount() {
    this.setState({ height: window.innerHeight + "px" });
  }

  render() {
    // const introOption = {
    //   loop: true,
    //   autoplay: true,
    //   animationData: profile,
    //   rendererSettings: {
    //     preserveAspectRatio: "xMidYMid slice"
    //   }
    // };

    const linkedinOption = {
      loop: true,
      autoplay: true,
      animationData: linkedin,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    const facebookOption = {
      loop: true,
      autoplay: true,
      animationData: facebook,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    const twitterOption = {
      loop: true,
      autoplay: true,
      animationData: twitter,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div className="container" style={{ height: this.state.height }}>
        <div className="flex mb-4">
          <div className="w-2/3 my-20">
            <strong className="text-6xl">{this.props.title}</strong>
            <div className="w-2/3">
              <p className="text-2xl my-10"> {this.props.description} </p>
              <p className="text-2xl my-5"> Love to see the impact of work </p>
              <p className="text-2xl my-5">
                {" "}
                Adhere to high-quality lean engineering principles{" "}
              </p>
            </div>
            <div className="w-1/6 my-20 flex">
              <Lottie
                options={linkedinOption}
                isClickToPauseDisabled={true}
                height={50}
                width={50}
              />

              <Lottie
                options={facebookOption}
                isClickToPauseDisabled={true}
                height={50}
                width={50}
              />

              <Lottie
                options={twitterOption}
                isClickToPauseDisabled={true}
                height={50}
                width={50}
              />
            </div>
          </div>
          <div className="w-1/3 my-24">
            <img
              className="object-contain w-full border-8 border-gray-300 sm:object-cover lg:object-cover"
              src={require("../../assets/image/1.jpg")}
            />
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
