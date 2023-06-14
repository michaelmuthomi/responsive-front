import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { RiSuitcaseLine } from "react-icons/ri";
import { VscSmiley } from "react-icons/vsc";
import { TbActivityHeartbeat } from "react-icons/tb";
import MainButton from "../features/MainButton";

const StatCards = (): JSX.Element => {
  return (
    <div>
      <div className="relative flex flex-col px-8 sm:px-16 xl:px-36 h-full bg-primary text-lg">
        <div className="flex flex-wrap justify-between space-x-0 mt-8 mb-6 sm:mb-0 xl:my-16">
          <div className="statCard">
            <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-1 lg:space-y-8">
              <div>
                <RiSuitcaseLine className="text-2xl lg:text-3xl xl:text-4xl text-secondary" />
              </div>
              <p className="flex justify-center font-medium text-xl sm:text-2xl lg:text-3xl xl:text-5xl">
                10
                <span className="ml-1 lg:ml-2 xl:ml-3 text-[8px] sm:text-[10px] lg:text-sm xl:text-xl">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-4">
              years in business
            </p>
          </div>
          <div className="statCard">
            <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-1 lg:space-y-8">
              <div>
                <VscSmiley className="text-2xl lg:text-3xl xl:text-4xl text-tertiary" />
              </div>
              <p className="flex justify-center font-medium text-xl sm:text-2xl lg:text-3xl xl:text-5xl">
                2000
                <span className="ml-1 lg:ml-2 xl:ml-3 text-[8px] sm:text-[10px] lg:text-sm xl:text-xl">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-4">
              positive reviews
            </p>
          </div>
          <div className="statCard">
            <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-1 lg:space-y-8">
              <div>
                <FiMessageCircle className="text-2xl lg:text-3xl xl:text-4xl text-primary" />
              </div>
              <p className="flex justify-center font-medium text-xl sm:text-2xl lg:text-3xl xl:text-5xl">
                15.000
                <span className="ml-1 lg:ml-2 xl:ml-3 text-[8px] sm:text-[10px] lg:text-sm xl:text-xl">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-4">
              satisfied clients
            </p>
          </div>
          <div className="statCard pt-2 sm:pt-4 xl:pt-10 lg:space-y-4">
            <div className="flex flex-col justify-center items-center space-y-3 sm:space-y-1 lg:space-y-8">
              <div>
                <TbActivityHeartbeat className="text-2xl lg:text-3xl xl:text-4xl text-green-600" />
              </div>
              <p className="flex justify-center font-medium text-xl sm:text-2xl lg:text-3xl xl:text-5xl">
                Many
                <span className="ml-1 lg:ml-2 xl:ml-3 text-[8px] sm:text-[10px] lg:text-sm xl:text-xl">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-4 lg:pb-4 xl:pb-8">
              nurses and physician assistants on staff
            </p>
          </div>
        </div>
        <MainButton overwrite="bg-tertiary xl:self-center mb-8 xl:mb-16 xl:mt-0 border-tertiary hover:text-tertiary hover:bg-white" />
      </div>
    </div>
  );
};

export default StatCards;
