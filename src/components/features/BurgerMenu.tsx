import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const BurgerMenu = ({
  toggleMenu,
  isMenuOpen,
  isMenuOpenLate,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  isMenuOpenLate: boolean;
}): JSX.Element => {
  // Props are passed from "Header" component.
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = (): void => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMenuOpenLate || windowWidth >= 1024)
    return <div className="hidden"></div>;

  return (
    <div
      className={`fixed top-0 w-full h-full z-30 ${
        // check if menu is open on different resolutions
        isMenuOpen
          ? windowWidth < 640
            ? "animate-slideInRight"
            : "animate-slideInRightSM"
          : windowWidth < 640
          ? "animate-slideOutRight scale-0"
          : "animate-slideOutRightSM scale-0"
      }`}
    >
      <div className="fixed top-0 right-0 w-full sm:w-3/5 h-full py-2 sm:py-3 pl-8 sm:pl-16 pr-4 sm:pr-16 bg-white shadow-lg z-50">
        <div className="flex justify-between text-2xl items-center h-14">
          <a href="/">A Better Weigh, Inc</a>
          <IoClose
            onClick={toggleMenu}
            className="w-8 h-8 text-primary cursor-pointer rounded-full transition-all duration-200 ease-in hover:bg-gray-200"
          />
        </div>
        <hr className="border-1" />
        <div className="flex flex-col w-full text-xl tracking-wide space-y-4 py-4">
          <a href="/about-us">Abous Us</a>
          <a href="/bookings">Book Online</a>
          <a href="/weight-loss">Weight Loss Programs</a>
          <a href="/stories">Real Patient Stories</a>
          <a href="/locations">Locations</a>
          <a href="/blogs">Blog</a>
          <a href="/shop">Shop</a>
          <a href="/subscription">Subscription</a>
        </div>
        <div
          className="fixed top-0 left-0 w-0 h-0 sm:w-2/5 sm:h-full bg-black bg-opacity-30 z-40"
          onClick={toggleMenu}
        ></div>
      </div>
    </div>
  );
};

export default BurgerMenu;
