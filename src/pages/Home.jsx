import React from "react";
import Slider from "./../components/slider/Slider";
import ThreeColumnLayout from "./../components/Layout/ThreeColumnLayout";
import MessageCard from "./../components/Layout/MessageCard";
import Feature from "./../components/feature/Feature";
import Products from "./../components/products/Products";
import WhyUs from "../components/whyUs/WhyUs";
import TeamMember from "../components/teamMember/TeamMember";

const Home = () => {
  return (
    <div>
      <Slider />
      <ThreeColumnLayout />
      <MessageCard />
      <Feature />
      <WhyUs />
      <Products />
      <TeamMember />
    </div>
  );
};

export default Home;
