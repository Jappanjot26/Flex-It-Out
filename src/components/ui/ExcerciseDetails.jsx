import React from "react";
const excercise = {
  name: "Pushup",
  description:
    "A pushup is a common calisthenics exercise beginning from the prone position.",
  video: "IODxDxX7oi4",
  img: "https://static.vecteezy.com/system/resources/previews/002/204/285/large_2x/a-man-is-doing-a-push-up-hand-drawn-style-design-illustrations-vector.jpg",
  score: 50,
  leaderboard: [
    { name: "Alice", score: 80 },
    { name: "Bob", score: 70 },
    { name: "Charlie", score: 60 },
    { name: "You", score: 50 },
  ],
};
const ExerciseDetails = () => {
  return (
    <div className="bg-background p-6 shadow-lg h-full">
      <h1 className="text-3xl text-light font-bold text-center mb-4">
        {excercise.name} Challenge
      </h1>

      <div className="mb-6 flex h-5/6 w-full">
        <iframe
          className="h-full w-4/6"
          src={`https://www.youtube.com/embed/${excercise.video}`}
          title="YouTube video player"
          style={{ border: 0 }}
          allow="accelerometer; autoplay;"
        ></iframe>
        <div className="flex flex-wrap flex-col gap-4 mx-4 items-center justify-center w-2/6">
          <YourScore />
          <Leaderboard scores={excercise.leaderboard} />
        </div>
      </div>
    </div>
  );
};

const YourScore = () => {
  return (
    <div className="bg-light p-4 rounded-lg shadow w-5/6">
      <h2 className="text-2xl font-semibold text-gray-800">Your Score</h2>
      <p className="text-xl text-gray-600 mt-2">
        You have completed <span className="font-bold text-blue-600">50</span>{" "}
        Pushups!
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
        Challenge Again
      </button>
    </div>
  );
};

const Leaderboard = ({ scores }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-5/6">
      <h2 className="text-2xl font-semibold text-gray-800">Leaderboard</h2>
      <ul className="mt-4">
        {scores.map((user, index) => (
          <li
            key={index}
            className={`flex justify-between p-2 border-b last:border-b-0  ${
              user.name === "You" ? "bg-blue-200" : ""
            }`}
          >
            <span className="text-gray-700">{user.name}</span>
            <span className="text-blue-600">{user.score} Pushups</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseDetails;
