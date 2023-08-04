import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "../features/BurgerMenu";

const Header = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuOpenLate, setIsMenuOpenLate] = useState<boolean>(false);

  // isMenuOpen is false when Hamburger Menu closes, and it's responsible for animation.
  // isMenuOpenLate is supposed to wait one second for animation to execute before applying "display: none" to side menu container.

  const handleResize = (): void => {
    setWindowWidth(window.innerWidth);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    isMenuOpen
      ? setTimeout(function () {
          setIsMenuOpenLate(!isMenuOpenLate);
        }, 1000)
      : setIsMenuOpenLate(!isMenuOpenLate);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="relative flex h-14 w-full items-center justify-between px-4 pt-2 sm:h-16 sm:px-16 sm:pt-4 xl:px-36">
      <a href="/">
        <img
          src="/logo.png"
          alt="Logo"
          className="mr-16 h-[45px] w-[100px] sm:h-[65px] sm:w-[140px]"
        />
      </a>
      {windowWidth >= 1024 ? (
        <div className="flex w-full items-center justify-between">
          <a className="nav-link bg-yellow-400 opacity-75 px-2 py-1 rounded" href="/about-us">Abous Us</a>
          <a className="nav-link bg-yellow-400 opacity-75 px-2 py-1 rounded" href="/bookings">Book Online</a>
          <a className="nav-link bg-yellow-400 opacity-75 px-2 py-1 rounded" href="/weight-loss">Weight Loss Programs</a>
          <a className="nav-link bg-yellow-400 opacity-75 px-2 py-1 rounded" href="/stories">Real Patient Stories</a>
          <a className="nav-link bg-yellow-400 opacity-75 px-2 py-1 rounded" href="/locations">Locations</a>
          <a className="nav-link bg-primary opacity-90 text-white px-2 py-1 rounded" href="/blogs">Blog</a>
          <a className="nav-link bg-primary opacity-90 text-white px-2 py-1 rounded" href="/shop">Shop</a>
          <a className="nav-link bg-primary opacity-90 text-white px-2 py-1 rounded" href="/subscription">Subscription</a>
        </div>
      ) : (
        <RxHamburgerMenu
          className="h-8 w-8 cursor-pointer text-primary hover:opacity-60"
          onClick={toggleMenu}
        />
      )}
      <BurgerMenu
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        isMenuOpenLate={isMenuOpenLate}
      />
    </nav>
  );
};

export default Header;
