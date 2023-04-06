import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import logo from "./../assets/images/logo.svg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openMenu = () => {
    setNavOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "auto";
  }, [navOpen]);

  return (
    <header>
      <img src={logo} alt="Company logo" className="logo" />

      <button className="open-menu-btn" onClick={() => openMenu()}></button>

      <NavBar navOpen={navOpen} setNavOpen={setNavOpen} />
    </header>
  );
};

export default Header;
