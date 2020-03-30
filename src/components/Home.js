import React from "react";
import "../assets/main.css";
import Intro from "./user/Intro";
import MainSkill from "./user/MainSkill";

export default () => {
  return (
    <div className="container mx-auto px-3">
      <Intro />
      <MainSkill />
    </div>
  );
};
