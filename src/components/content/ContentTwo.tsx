import React from "react";
import MainButton from "../features/MainButton";

const ContentTwo = (): JSX.Element => {
  return (
    <div className="relative flex flex-col items-center space-y-8 px-0 py-8 xl:pb-0 xl:pt-16 xl:px-36 h-full bg-white text-start xl:text-center text-lg">
      <p className="w-full order-first xl:order-none px-8 sm:px-36 xl:px-0 my-2 xl:my-4 text-3xl xl:text-4xl tracking-wide">
        We Can Help You
      </p>
      <p className="flex flex-col xl:block px-8 sm:px-36 xl:px-0 space-y-4 sm:space-y-8 xl:space-y-0">
        <span className="text-sm sm:text-base xl:text-lg order-1 xl:order-none">
          For those of us who struggle with our weight it's easy to lose hope.
          We have seen so many tricks, gimmicks and weight loss programs that
          simply do not work for us. They want us to eat like a pigeon, avoid
          all the things we love to eat and work out till we cry.
        </span>{" "}
        <span className="text-sm sm:text-base xl:text-lg order-2 xl:order-none">
          We are here to tell you that it doesn't have to be that way. There is
          hope! Technology has advanced rapidly in recent years and now, with
          proper guidance...
        </span>
      </p>
      <p className="text-sm sm:text-base xl:text-lg px-8 sm:px-36 xl:px-0 order-4 xl:order-none">
        You can join the ranks of our over 15,000 satisfied clients who have
        lost weight, regained their confidence and are living happy exuberant
        lives with their family. They did this without: breaking the bank,
        sweating buckets in intense workout programs, and most importantly,
        without giving up ice-cream, bread, pizza, doughnuts and all their
        favorite foods.
      </p>
      <MainButton overwrite="xl:self-center order-last xl:order-none" />
      <img
        src="/group.png"
        alt="Group of people"
        height={760}
        className="w-full h-40 sm:h-full order-3 xl:order-none"
      />
    </div>
  );
};

export default ContentTwo;
