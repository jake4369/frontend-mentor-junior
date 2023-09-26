"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

const HeroImg = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window width and set isMobile state
    const checkWindowWidth = () => {
      if (window.innerWidth < 1000) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Initial check when the component mounts
    checkWindowWidth();

    // Add an event listener to update isMobile state when the window is resized
    window.addEventListener("resize", checkWindowWidth);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  return (
    <div className="hero-img">
      ({/* Hero Img */})
      {isMobile ? (
        <Image
          src="/illustration-sign-up-mobile.svg"
          alt=""
          width={50}
          height={50}
          className="hero-img__mobile"
          priority={true}
        />
      ) : (
        <Image
          src="/illustration-sign-up-desktop.svg"
          alt=""
          width={50}
          height={50}
          className="hero-img__desktop"
          priority={true}
        />
      )}
    </div>
  );
};

export default HeroImg;
