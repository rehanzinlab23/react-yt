// Example 1

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [num2, setNum2] = useState(100);

//   useEffect(
//     function () {
//       console.log("Use Effect is running...");
//     },
//     [num]
//   );

//   return (
//     <div>
//       <h1>num1 is {num}</h1>
//       <h1>num2 is {num2}</h1>
//       <button
//         onMouseEnter={() => {
//           setNum(num + 1);
//         }}
//         onMouseLeave={() => {
//           setNum2(num2 + 100);
//         }}
//       >
//         Hover
//       </button>
//     </div>
//   );
// };

// export default App;

// Example 2

import React, { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log("The value of A is changing..");
  }

  function bChanging() {
    console.log("The value of B is changing..");
  }

  useEffect(
    function () {
      aChanging();
    },
    [a]
  );

  useEffect(
    function () {
      bChanging();
    },
    [b]
  );

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        B
      </button>
    </div>
  );
};

export default App;
