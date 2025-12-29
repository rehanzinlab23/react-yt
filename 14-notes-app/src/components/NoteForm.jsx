const NoteForm = ({ title, details, setTitle, setDetails, formSubmit }) => {
  return (
    <form
      onSubmit={formSubmit}
      className="flex lg:w-1/2 flex-col gap-4 items-start p-10"
    >
      <h1 className="text-4xl font-bold">Add Notes</h1>

      <input
        type="text"
        placeholder="Enter Notes Heading"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-5 py-2 border-2 rounded w-full outline-none font-medium"
      />

      <textarea
        placeholder="Write Details here..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="px-5 py-2 border-2 rounded h-32 w-full outline-none font-medium"
      />

      <button className="px-5 py-2 cursor-pointer bg-white text-black rounded w-full font-medium active:scale-95">
        Add Notes
      </button>
    </form>
  );
};

export default NoteForm;
