import React from "react";
import MainButton from "../features/MainButton";
import { BsDot } from "react-icons/bs";

const ContentThree = (): JSX.Element => {
  return (
    <div className="relative flex flex-col items-center space-y-8 xl:space-y-16 py-8 xl:py-16 px-8 sm:px-36  xl:px-36 h-full bg-customWhite text-lg">
      <p className="my-2 sm:my-4 text-start xl:text-center tracking-wide text-3xl xl:text-4xl">
        What You'll Get At Your <span className="text-primary">Free</span>{" "}
        Consultation
      </p>
      <div className="flex flex-wrap space-y-8 xl:space-y-0 justify-around">
        <div className="w-full sm:px-20 xl:w-5/12 space-y-4 sm:space-y-6 xl:space-y-8 bg-white p-4 xl:p-8 rounded-3xl shadow-lg">
          <p className="text-2xl xl:text-3xl text-center text-secondary">
            Body Mass Index
          </p>
          <hr className="border-1 border-secondary" />
          <ul className="space-y-4">
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Complete understanding of your body composition
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />A clear view of your weight loss
              goals
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Clear data to help you make an informed decision about your health
            </li>
          </ul>
        </div>
        <div className="w-full sm:px-20 xl:w-5/12 space-y-4 xl:space-y-8 bg-white p-4 xl:p-8 rounded-3xl shadow-lg">
          <p className="text-2xl xl:text-3xl text-center text-primary">
            Vital Signs Check
          </p>
          <hr className="border-1 border-primary" />
          <ul className="space-y-4">
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Body temperature
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Pulse rate, heart's rate, rhythm and regularity
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Breathing rare
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Blood pressure
            </li>
          </ul>
        </div>
      </div>
      <MainButton overwrite="xl:self-center" />
    </div>
  );
};

export default ContentThree;
