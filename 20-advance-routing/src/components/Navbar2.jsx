import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5 py-2 bg-cyan-700">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-600 rounded m-4 px-4 py-2 text-sm cursor-pointer active:scale-95 font-bold"
      >
        Go to home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-600 rounded m-4 px-4 py-2 text-sm cursor-pointer active:scale-95 font-bold"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-amber-600 rounded m-4 px-4 py-2 text-sm cursor-pointer active:scale-95 font-bold"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
