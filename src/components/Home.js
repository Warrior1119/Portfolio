import React from "react";
import "../assets/main.css";
import Intro from "./user/Intro";
import WhatDo from "./user/WhatDo";
import RecentProjects from "./user/RecentProjects";
export default () => {
  return (
    <div className="container mx-auto px-3 h-screen">
      <Intro />
      <WhatDo />
      <RecentProjects />
    </div>
  );
};
