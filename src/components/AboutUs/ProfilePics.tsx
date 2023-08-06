import React from 'react';

const ProfilePics = ({
  positionAndName,
  imgSrc,
  href,
  nickName,
}: {
  positionAndName: string;
  imgSrc: string;
  href?: string;
  nickName?: string;
}): JSX.Element => {
  return (
    <figure className="flex h-[300px] w-[300px] flex-col items-center justify-center">
      <img
        className="h-[250px] w-[250px] rounded-full"
        src={imgSrc}
        alt={`${positionAndName}`}
      />
      <figcaption className="p-3 text-xl italic">
        {positionAndName}
        {href && nickName && <a href={href}>{` ${nickName}`}</a>}
      </figcaption>
    </figure>
  );
};

export default ProfilePics;
