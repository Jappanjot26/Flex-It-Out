import Feature1 from "../../../img/img3.1.png";
import Feature2 from "../../../img/img3.2.png";
import Feature3 from "../../../img/img3.3.png";
function Features() {
  return (
    <div className="h-screen flex w-screen p-32 bg-background items-center flex-col">
      <div className="anton text-8xl text-main italic uppercase mb-4">
        What we Offer
      </div>
      <div className="hanken text-white text-2xl mb-8">
        We're committed to bringing you the best workout experience.
      </div>
      <div className="flex gap-4 w-screen px-32">
        <img
          src={Feature1}
          alt="Ai powered tracking"
          className="w-1/3 h-[90%]"
        />
        <img
          src={Feature3}
          className="w-1/3 h-[90%]"
          alt="Leaderboard and challenges"
        />
        <img src={Feature2} className="w-1/3 h-[90%]" alt="Progress insights" />
      </div>
    </div>
  );
}

export default Features;
