const RightCardContent = (props) => {
  return (
    <div className="h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full flex justify-center items-center text-xl h-12 w-12 font-semibold">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-xl text-shadow-2xs leading-relaxed text-white mb-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          molestias eos illo, a sapiente architecto?
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-medium px-8 py-3 rounded-full cursor-pointer"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-medium px-4 py-3 rounded-full cursor-pointer"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
