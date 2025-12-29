import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const OnClicked = () => {
    // Method 1
    // const newNum = [...num];
    // newNum.push(69, 67);
    // setNum(newNum);

    // Method 2
    // setNum((prev) => ({ ...prev, user: "Hussain", age: 30 }));

    // Batch Update

    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button
        className="bg-amber-300 rounded-3xl p-2 m-3 cursor-pointer"
        onClick={OnClicked}
      >
        Click Me!
      </button>
    </div>
  );
};

export default App;
