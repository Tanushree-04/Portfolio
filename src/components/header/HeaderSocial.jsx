import React from "react";
import { BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <Link
        to="https://www.linkedin.com/in/tanushree-singh-47743b219"
        target="_blank"
      >
        <BsLinkedin />
      </Link>
      <Link to="https://github.com/Tanushree-04" target="_blank">
        <FaGithub />
      </Link>
    </div>
  );
};

export default HeaderSocial;
