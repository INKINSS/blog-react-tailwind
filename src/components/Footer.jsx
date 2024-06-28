import React from "react";
import ButtonGitHub from "../common/ButtonGitHub";

const Footer = () => {
  return (
    <footer className="bg-blueDark py-10 text-center">
      <p className="text-whiteLight">también puedes contribuir por medio de GitHub</p>
      <ButtonGitHub color="white" />
    </footer>
  );
};

export default Footer;
