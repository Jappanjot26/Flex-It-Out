import HeroImg from "../../../img/img1.png";
import Navbar from "../Navbar";
import Button from "../Button";

function Hero() {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <Navbar />
      <div className="self-center h-full flex flex-col p-16 xl:p-32 pb-16 xl:pt-56">
        <div className="self-end text-white flex anton font-bold xl:text-[12rem] mb-8 xl:tracking-wide xl:flex-row xl:leading-72 italic text-8xl leading-28 flex-col">
          <div className="w-1/2 xl:w-full">
            BE YOUR
            <span className="text-main"> BEST</span>
          </div>
        </div>
        <Button>Start Today</Button>
      </div>
    </div>
  );
}

export default Hero;
