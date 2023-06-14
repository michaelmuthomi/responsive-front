import React from "react";

const NotFound = (): JSX.Element => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <button className="button self-center my-8">
        <a href="/">Go back home</a>
      </button>
      <img
        src="/NotFound.svg"
        alt="404 - Page Not Found"
        className="w-full h-auto sm:h-[80%] self-center"
      />
    </div>
  );
};

export default NotFound;
