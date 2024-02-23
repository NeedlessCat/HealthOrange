import React from "react";
import OnlineCourses from "../allcourses/courses";
import Hero from "./hero/Hero";
import Testimonal from "./testimonal/Testimonal";

const Home = () => {
  return (
    <>
      <Hero />
      <OnlineCourses />
      <Testimonal />
    </>
  );
};

export default Home;
