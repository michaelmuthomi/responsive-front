import React from "react";
import MainButton from "../features/MainButton";

const ContentOne = (): JSX.Element => {
  return (
    <div className="relative flex flex-col xl:flex-row justify-between pb-4 xl:pb-0 px-8 sm:px-36 xl:px-36 h-full bg-secondary text-customWhite text-lg">
      <div className="flex flex-col space-y-8 sm:space-y-12 xl:space-y-16 xl:w-1/2 my-8 sm:my-12 xl:my-16">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-3xl sm:text-4xl">Who Is The Consultation For?</p>
          <p className="text-sm sm:text-base xl:text-lg xl:w-7/12">
            Chicago's free medical check-up and weight loss consultation is for
            Chicago residents who are looking to lose weight so they can live a
            long, vibrant and healthy life, while looking good and not breaking
            the bank.
          </p>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <p className="text-3xl sm:text-4xl">How Does It Work?</p>
          <p className="text-sm sm:text-base xl:text-lg xl:w-7/12">
            In this exam a certified nurse or physician will do various tests to
            check your overall health level and find which easy-to-do
            physician-supervised weight loss program will work best for you.
          </p>
        </div>
        <MainButton overwrite="" />
      </div>
      <div className="flex justify-center self-center w-3/4 sm:w-full h-80 sm:h-full xl:w-1/2 xl:my-16 xl:ml-16">
        <img src="/trainer.png" alt="Trainer" className="h-full" />
      </div>
    </div>
  );
};

export default ContentOne;
