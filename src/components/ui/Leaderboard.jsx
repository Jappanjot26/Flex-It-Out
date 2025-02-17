import Leader from "./leaderboard/Leader";
import OtherPositions from "./leaderboard/OtherPositions";
import SubLeaders from "./leaderboard/SubLeaders";

const data = {
  leaders: [
    {
      position: 1,
      name: "Ethan",
      score: 90,
    },
    {
      position: 2,
      name: "Olivia",
      score: 85,
    },
    {
      position: 3,
      name: "Liam",
      score: 80,
    },
    {
      position: 4,
      name: "Ava",
      score: 75,
    },
    {
      position: 5,
      name: "Noah",
      score: 70,
    },
  ],
  user: {
    position: 96,
    name: "JS",
    score: 52,
  },
};

function Leaderboard() {
  return (
    <div className="h-full w-5/6 rounded-xl flex flex-col items-center mb-16 bg-[#222] py-6">
      <span className="text-white uppercase anton text-3xl mb-6">
        Leaderboard
      </span>
      <div className="flex gap-6 mb-4 items-end h-56">
        <SubLeaders data={data.leaders[1]}>2</SubLeaders>
        <Leader data={data.leaders[0]} />
        <SubLeaders data={data.leaders[2]}>3</SubLeaders>
      </div>
      <div>
        <OtherPositions data={data.leaders[3]} />
        <OtherPositions data={data.leaders[3]} />
        <OtherPositions data={data.leaders[3]} />
      </div>
    </div>
  );
}

export default Leaderboard;
