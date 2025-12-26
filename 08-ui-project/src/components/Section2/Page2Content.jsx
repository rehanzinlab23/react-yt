import Boxes from "./Boxes";
import Page2HeroText from "./Page2HeroText";
import Page2Paragraph from "./Page2Paragraph";

const Page2Content = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex flex-col h-full w-1/3">
        <Page2HeroText />
        <Page2Paragraph />
        <Boxes />
      </div>
      <div>
        <img
          src="https://media.istockphoto.com/id/695619416/photo/concept-of-business-man-drawing-growth-chart-for-the-year-2020.webp?a=1&b=1&s=612x612&w=0&k=20&c=xbjR1V7j4f7u9bALrrlZ18kzQ6qvN6XvgNO3smO8hXw="
          alt="Bar"
        />
      </div>
    </div>
  );
};

export default Page2Content;
