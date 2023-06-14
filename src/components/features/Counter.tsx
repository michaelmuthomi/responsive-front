import React from "react";

const Counter = (): JSX.Element => {
  return (
    <div className="counterBlock">
      <p className="text-center text-sm sm:text-lg mb-6 xl:mb-14 tracking-wider">
        Your offer ends in:
      </p>
      <div className="flex flex-nowrap justify-between min-[500px]:justify-around sm:justify-between">
        <div className="flex flex-col text-center">
          <span className="counterText">Days</span>
          <span className="counterNumber">00</span>
        </div>
        <div className="flex flex-col">
          <span className="counterText">Hours</span>
          <span className="counterNumber">16</span>
        </div>
        <div className="flex flex-col">
          <span className="counterText">Minutes</span>
          <span className="counterNumber">29</span>
        </div>
        <div className="flex flex-col">
          <span className="counterText">Seconds</span>
          <span className="counterNumber">27</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
