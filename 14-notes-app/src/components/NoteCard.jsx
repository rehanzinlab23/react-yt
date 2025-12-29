const NoteCard = ({ elem, idx, deleteNote }) => {
  return (
    <div className="relative flex flex-col justify-between h-52 w-40 rounded-2xl text-black pt-9 pb-4 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
      <div>
        <h3 className="text-lg font-bold">{elem.title}</h3>
        <p className="mt-4 font-semibold text-gray-500 text-xs">
          {elem.details}
        </p>
      </div>

      <button
        onClick={() => deleteNote(idx)}
        className="w-full cursor-pointer bg-red-500 text-white text-xs p-2 rounded font-bold active:scale-95"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;
