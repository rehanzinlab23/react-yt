import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  localStorage.setItem("notes", JSON.stringify(task));

  const formSubmit = (e) => {
    e.preventDefault();
    setTask([...task, { title, details }]);
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
      <NoteForm
        title={title}
        details={details}
        setTitle={setTitle}
        setDetails={setDetails}
        formSubmit={formSubmit}
      />

      <NotesList task={task} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
