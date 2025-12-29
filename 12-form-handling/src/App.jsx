import React from "react";

const App = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        <input
          className="m-2.5 pt-2.5 pb-2.5 pl-3 pr-3 bg-red-700"
          type="text"
          placeholder="Enter your Text"
        />
        <button className="m-2.5 pt-2.5 pb-2.5 pl-3 pr-3 bg-red-300 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
