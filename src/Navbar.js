import React, { useEffect, useState } from "react";
import netflixLogo from "./Netflix-Logo.wine.svg";
import "./Navbar.css";
const Navbar = () => {
  const [fixedNavBar, setFixedNavBar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setFixedNavBar(true);
      } else {
        setFixedNavBar(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`navBar  ` + (fixedNavBar && "navBar__dark")}>
      <img
        src={netflixLogo}
        alt="netflix-clone"
        className="navBar__netflix_logo"
      />
      <button className="navBar__sign_in_button">Sign In</button>
    </nav>
  );
};

export default Navbar;
