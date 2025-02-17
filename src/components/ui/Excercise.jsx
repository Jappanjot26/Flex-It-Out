import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import Button from "./Button";
const id = "WDIpL0pjun0";
const excerciseName = "Pushup";
function Excercise() {
  return (
    <div className="bg-background xl:h-screen w-screen xl:overflow-hidden flex flex-col items-center">
      <Navbar />
      <span className="font-bold uppercase anton text-4xl xl:text-6xl text-[#f7f7f7] mt-8 xl:mt-0">
        {excerciseName}
      </span>
      <div className="h-full w-full flex xl:px-32 xl:py-16 p-8 gap-8 flex-col xl:flex-row">
        <div className="h-full md:h-108 xl:h-full w-full xl:w-2/3 md:flex md:justify-center">
          <iframe
            className="xl:h-5/6 w-full md:w-5/6 shadow-[#232323] shadow-2xl"
            src={`https://www.youtube.com/embed/${id}?playlist=${id}&loop=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="h-5/6 py-16 w-full xl:w-1/3 flex items-center flex-col justify-center">
          <Leaderboard />
          <Button>Challenge</Button>
        </div>
      </div>
    </div>
  );
}

export default Excercise;
