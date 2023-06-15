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
            <div className="statIconAndTitleContainer">
              <div>
                <RiSuitcaseLine className="statIconSize text-secondary" />
              </div>
              <p className="statNumber">
                10
                <span className="statPlusIcon">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="statDescriptionText">years in business</p>
          </div>
          <div className="statCard">
            <div className="statIconAndTitleContainer">
              <div>
                <VscSmiley className="statIconSize text-tertiary" />
              </div>
              <p className="statNumber">
                2000
                <span className="statPlusIcon">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="statDescriptionText">positive reviews</p>
          </div>
          <div className="statCard">
            <div className="statIconAndTitleContainer">
              <div>
                <FiMessageCircle className="statIconSize text-primary" />
              </div>
              <p className="statNumber">
                15.000
                <span className="statPlusIcon">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="statDescriptionText">satisfied clients</p>
          </div>
          <div className="statCard max-[820px]:pt-2 max-[740px]:pt-4 max-[680px]:pt-3 xl:pt-6">
            <div className="statIconAndTitleContainer">
              <div>
                <TbActivityHeartbeat className="statIconSize text-green-600" />
              </div>
              <p className="statNumber">
                Many
                <span className="statPlusIcon">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="statDescriptionText">
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
