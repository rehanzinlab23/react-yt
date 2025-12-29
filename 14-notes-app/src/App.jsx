import React, { useState } from "react";

import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
        className="flex lg:w-1/2 flex-col gap-4 items-start p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="px-5 py-2 border-2 rounded w-full outline-none font-medium"
        />
        <textarea
          type="text"
          placeholder="Write Details here..."
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className="px-5 py-2 border-2 rounded h-32 w-full outline-none flex flex-row items-start font-medium"
        />
        <button className="px-5 py-2 outline-none active:scale-95 bg-white text-black rounded cursor-pointer w-full font-medium">
          Add Notes
        </button>
      </form>
      <div className="p-10 lg:w-1/2 lg:border-l-2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative flex justify-between flex-col items-start h-52 w-40 rounded-2xl text-black pt-9 pb-4 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {elem.title}
                  </h3>
                  <p className="leading-tight mt-6 font-medium text-gray-500 text-sm">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    [deleteNote(idx)];
                  }}
                  className="w-full text-white bg-red-500 text-xs p-2 rounded font-bold cursor-pointer active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
