import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function IncreaseNum() {
    setNum(num + 1);
  }

  function DecreaseNum() {
    setNum(num - 1);
  }

  function Jump5Num() {
    setNum(num + 5);
  }

  return (
    <div className="flex flex-col justify-between items-center flex-2">
      <h1 className="bg-cyan-700 w-fit pt-2.5 pb-2.5 pl-20 pr-20 m-2.5 rounded-[5px] text-8xl">
        {num}
      </h1>
      <button
        onClick={IncreaseNum}
        className="bg-cyan-500 pt-2.5 pb-2.5 pl-5 pr-5 m-2.5 cursor-pointer rounded-3xl"
      >
        Increase
      </button>
      <button
        onClick={DecreaseNum}
        className="bg-cyan-500 pt-2.5 pb-2.5 pl-5 pr-5 m-2.5 cursor-pointer rounded-3xl"
      >
        Decrease
      </button>
      <button
        onClick={Jump5Num}
        className="bg-cyan-500 pt-2.5 pb-2.5 pl-5 pr-5 m-2.5 cursor-pointer rounded-3xl"
      >
        Increase by 5
      </button>
    </div>
  );
};

export default App;
