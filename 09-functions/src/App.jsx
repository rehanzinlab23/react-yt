import React from "react";

const App = () => {
  function InputChanging(val) {
    console.log(val);
  }
  return (
    <div>
      <input
        onChange={function (elem) {
          console.log(elem.target.value);
        }}
        type="text"
        placeholder="Type Something"
      />
    </div>
  );
};

export default App;
