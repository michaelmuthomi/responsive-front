import React from 'react';

const MainButton = ({ overwrite }: { overwrite: string }): JSX.Element => {
  return <button className={`button ${overwrite}`}>Book my appointment</button>;
};

export default MainButton;
