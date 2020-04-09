import React, { Component } from "react";
import "../../assets/css/User.css";

class RecentProjects extends Component {
  render() {
    const imgUrl = require("../../assets/image/1.png");
    const backgroundstyle = {
      width: "300px",
      height: "100%",
      backgroundImage: `url(${require("../../assets/image/1.png")})`,
    };
    return (
      <div className="container">
        <div className="title-wrap">
          <p className="text-xl">RecentProjects</p>
          <strong> View all case studies > </strong>
        </div>

        <div className="max-w-sm w-full lg:max-w-full lg:flex my-10 overflow-hidden shadow-2xl recentProject">
          <div className="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden recentProject-card"></div>

          <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                Brandnooz.de
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>

          <div className="w-full flex">abc</div>
        </div>

        <div></div>
      </div>
    );
  }
}

export default RecentProjects;
