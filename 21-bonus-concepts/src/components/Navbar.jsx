import React from "react";

const Navbar = (props) => {
  function themeChange() {
    props.setTheme("dark");
  }

  return (
    <div>
      <p>{props.theme}</p>
      <button onClick={themeChange}>Change Theme</button>
    </div>
  );
};

export default Navbar;
