import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import Button from "./Button";
const id = "WDIpL0pjun0";
const excerciseName = "Pushup";
function Excercise() {
  return (
    <div className="bg-background h-screen w-screen overflow-hidden flex flex-col items-center">
      <Navbar />
      <span className="font-bold uppercase anton text-6xl text-[#f7f7f7]">
        {excerciseName}
      </span>
      <div className="h-full w-full flex px-32 py-16  gap-8">
        <div className="h-full w-2/3">
          <iframe
            className="h-5/6 w-full shadow-[#232323] shadow-2xl"
            src={`https://www.youtube.com/embed/${id}?playlist=${id}&loop=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="h-5/6 py-16 w-1/3 flex items-center flex-col justify-center ">
          <Leaderboard />
          <Button>Challenge</Button>
        </div>
      </div>
    </div>
  );
}

export default Excercise;
