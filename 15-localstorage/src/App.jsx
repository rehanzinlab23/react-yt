import React from "react";

const App = () => {
  const user = {
    username: "john_doe",
    age: 30,
    city: "New York",
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.clear();
  console.log(user);

  return <div>App</div>;
};

export default App;
