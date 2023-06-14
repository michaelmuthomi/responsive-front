import React from "react";
import Header from "../layout/Header";
import Counter from "../features/Counter";
import MainButton from "../features/MainButton";

const LandingPage = (): JSX.Element => {
  return (
    <div>
      <div className="yellowBlock"></div>
      {/* yellowBlock and other styles are in file: index.css */}
      <Header />
      <div className="flex flex-col py-8 xl:py-16 px-8 sm:px-16 xl:px-36 z-10">
        <div className="flex flex-wrap justify-between">
          <p className="w-full sm:w-3/4 xl:w-2/5 sm:mb-8 xl:mb-0 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-center sm:text-start tracking-wide leading-normal lg:leading-relaxed xl:leading-relaxed break-words">
            Chicago's <span className="text-primary">Free</span> Medical
            Check-Up and Weight Loss Consultation
          </p>
          <Counter />
        </div>
        <p className="w-full sm:w-3/4 xl:w-2/5 my-6 sm:mt-8 xl:mt-6 sm:mb-4 xl:mb-6 sm:text-lg leading-relaxed">
          Limited spots available due to the Physicians schedule and the high
          demand for service. No credit card or insurance required.
        </p>
        <MainButton overwrite={""} />
      </div>
    </div>
  );
};

export default LandingPage;
