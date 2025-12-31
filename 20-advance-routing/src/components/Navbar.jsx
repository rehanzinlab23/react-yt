import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-cyan-800 flex items-center justify-between py-2.5 px-5">
        <h2 className="text-2xl font-bold">Rehan</h2>
        <div className="flex gap-6">
          <Link className="text-xl font-bold" to="/">
            Home
          </Link>
          <Link className="text-xl font-bold" to="/about">
            About
          </Link>
          <Link className="text-xl font-bold" to="/course">
            Courses
          </Link>
          <Link className="text-xl font-bold" to="/product">
            Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
