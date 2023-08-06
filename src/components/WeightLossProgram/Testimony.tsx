import React from 'react';

type Props = {
  imgSrc: string;
  name: string;
  testimony: string;
};

const Testimony = ({ imgSrc, name, testimony }: Props): JSX.Element => {
  return (
    <div className="flex flex-col items-center overflow-y-auto h-[450px]">
      <figure className="w-[300px] flex flex-col items-center">
        <img
          className="h-[250px] w-[250px] rounded-full"
          src={imgSrc}
          alt={`${name}`}
        />
        <figcaption className="p-3 text-xl italic flex flex-col">
          {name}
          {testimony && <p>{testimony}</p>}
        </figcaption>
      </figure>
    </div>
  );
};

export default Testimony;
