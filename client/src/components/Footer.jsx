import React from "react";
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>
        Made with 🤍 by <b>Zach Yu</b>
      </span>
    </footer>
  );
};

export default Footer;