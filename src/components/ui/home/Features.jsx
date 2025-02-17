import Feature1 from "../../../img/img3.1.png";
import Feature2 from "../../../img/img3.2.png";
import Feature3 from "../../../img/img3.3.png";
function Features() {
  return (
    <div className="xl:h-screen flex w-screen xl:p-32 p-8 bg-background items-center flex-col pt-32">
      <div className="anton xl:text-8xl text-6xl text-main italic uppercase mb-4 text-center">
        What we Offer
      </div>
      <div className="hanken text-white xl:text-2xl text-xl text-center mb-8 md:text-2xl">
        We're committed to bringing you the best workout experience.
      </div>
      <div className="flex gap-4 w-screen xl:px-32 xl:py-16  flex-col xl:flex-row items-center">
        <img
          src={Feature1}
          alt="Ai powered tracking"
          className="xl:w-1/3 h-[90%] w-5/6"
        />
        <img
          src={Feature3}
          className="xl:w-1/3 h-[90%] w-5/6"
          alt="Leaderboard and challenges"
        />
        <img
          src={Feature2}
          className="xl:w-1/3 h-[90%] w-5/6"
          alt="Progress insights"
        />
      </div>
    </div>
  );
}

export default Features;
