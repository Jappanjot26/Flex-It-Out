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
      <div className="self-center h-full flex flex-col p-32">
        <div className="self-end text-white flex anton font-bold text-[12rem] mb-8 tracking-wide italic">
          <div>
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
