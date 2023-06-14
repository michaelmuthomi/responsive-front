import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const BurgerMenu = ({ question }: { question: string }): JSX.Element => {
  return (
    <div className="FAQcontainer">
      <p className="flex justify-between">
        <p className="w-[85%]">{question}</p>
        <IoIosArrowDown className="FAQarrow self-center" />
      </p>
    </div>
  );
};

export default BurgerMenu;
