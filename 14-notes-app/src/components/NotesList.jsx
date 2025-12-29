import NoteCard from "./NoteCard";

const NotesList = ({ task, deleteNote }) => {
  return (
    <div className="p-10 lg:w-1/2 lg:border-l-2">
      <h1 className="text-4xl font-bold">Recent Notes</h1>

      <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-[90%]">
        {task.map((elem, idx) => (
          <NoteCard key={idx} elem={elem} idx={idx} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
