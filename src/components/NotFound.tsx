import React from 'react';

const NotFound = (): JSX.Element => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <button className="button my-8 self-center">
        <a href="/">Go back home</a>
      </button>
      <img
        src="/NotFound.svg"
        alt="404 - Page Not Found"
        className="h-auto w-full self-center sm:h-[80%]"
      />
    </div>
  );
};

export default NotFound;
