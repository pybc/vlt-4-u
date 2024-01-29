import React, { useMemo, useState } from "react";
import "./App.css";

const BalloonComponent = ({ type, number, anim, width, height, increaseSize }) => (
  <div
    className={`balloon balloon${number} balloon-anim${anim} !w-[${width}px] !h-[${height}px]`}
    onClick={increaseSize}></div>
);

const App = () => {
  const baseWidth = 100;
  const [width, setWidth] = useState(baseWidth);
  const [height, setHeight] = useState(100);
  const getAnim = useMemo(() => {
    switch (true) {
      case width > baseWidth + 200:
        return 5;
      case width > baseWidth + 120:
        return 4;
      default:
        return 2;
    }
  }, [width]);
  const handleIncreaseSize = () => {
    setWidth((prev) => prev + 5);
    setHeight((prev) => prev + 5);
  };
  return (
    <div className='flex justify-center align-center mt-20'>
      <BalloonComponent
        number={1}
        anim={getAnim}
        width={width}
        height={height}
        increaseSize={handleIncreaseSize}
      />
    </div>
  );
};

export default App;
