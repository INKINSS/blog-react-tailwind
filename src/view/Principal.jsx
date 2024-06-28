import React from "react";
import Welcome from "../components/Welcome";
import Section from "../components/Collaborate";
import { MdMenu } from "react-icons/md";
import Collaborate from "../components/Collaborate";
import Discover from "../components/Discover";
import Footer from "../components/Footer";

const Principal = () => {
  return (
    <>
      <div className="flex justify-end px-8">
        <MdMenu size={"3em"} fill="blueDark" className="m-3" />
      </div>
      <Welcome />
      <Collaborate />
      <Discover />
      <Footer />
    </>
  );
};

export default Principal;
