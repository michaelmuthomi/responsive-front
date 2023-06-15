import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "../features/BurgerMenu";

const Header = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleResize = (): void => {
    setWindowWidth(window.innerWidth);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="relative flex justify-between w-full items-center h-14 sm:h-16 pt-2 sm:pt-4 px-4 sm:px-16 xl:px-36">
      <a href="/">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[100px] sm:w-[140px] h-[45px] sm:h-[65px] mr-16"
        />
      </a>
      {windowWidth >= 1024 ? (
        <div className="flex w-full justify-between items-center">
          <a href="/about-us">Abous Us</a>
          <a href="/bookings">Book Online</a>
          <a href="/weight-loss">Weight Loss Programs</a>
          <a href="/stories">Real Patient Stories</a>
          <a href="/locations">Locations</a>
          <a href="/blogs">Blog</a>
          <a href="/shop">Shop</a>
          <a href="/subscription">Subscription</a>
        </div>
      ) : (
        <RxHamburgerMenu
          className="w-8 h-8 text-primary cursor-pointer hover:opacity-60"
          onClick={toggleMenu}
        />
      )}
      {isMenuOpen && (
        <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      )}
    </nav>
  );
};

export default Header;
