const Boxes = () => {
  return (
    <div className="flex gap-20 items-center">
      <div className="bg-blue-600 rounded-4xl p-10 relative">
        <span className="absolute right-[-10%] top-[-6%] bg-white rounded-full h-20 w-20 text-6xl text-center border-solid border-2 border-black">
          <i className="ri-arrow-right-up-line"></i>
        </span>

        <h1 className="text-6xl font-bold text-white text-left pt-14">26,7%</h1>
        <p className="text-white text-lg pt-9.5 font-bold text-left">
          Expected annual growth
          <br /> of eCom market size
        </p>
      </div>
      <div className="bg-lime-300 rounded-4xl p-10 relative">
        <span className="absolute right-[-10%] top-[-6%] bg-white rounded-full h-20 w-20 text-6xl text-center border-solid border-2 border-black">
          <i className="ri-arrow-right-up-line"></i>
        </span>

        <h1 className="text-6xl font-bold text-black text-left pt-14">25%</h1>
        <p className="text-black text-lg pt-9.5 font-bold text-left">
          E-com share of the <br />
          organized retail in 2020
        </p>
      </div>
    </div>
  );
};

export default Boxes;
