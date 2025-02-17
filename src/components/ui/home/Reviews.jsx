import TestinomialCard from "./TestinomialCard";
const testinomials = [
  {
    name: "Arjun",
    age: "21",
    review:
      "It keeps me accountable! The AI tracking is super accurate, and the leaderboard pushes me to do more every day.",
    img: "https://th.bing.com/th/id/OIP.Ck2Usj84bIh_SiI2QJ7b-QHaEp?rs=1&pid=ImgDetMain",
  },
  {
    name: "Priya",
    age: "24",
    review:
      "I love the real-time feedback! It feels like having a personal trainer, and seeing my progress keeps me motivated",
    img: "https://th.bing.com/th/id/OIP.xcKD3w58xiM1l9211ExZMwHaE8?rs=1&pid=ImgDetMain",
  },
  {
    name: "Anshul",
    age: "23",
    review:
      "Competing with friends on the leaderboard makes workouts so much fun. This app has totally changed my fitness game!",
    img: "https://img.freepik.com/premium-photo/american-man_62972-2584.jpg",
  },
];
function Reviews() {
  return (
    <div className="h-screen flex w-screen p-32 bg-background items-center flex-col">
      <div className="anton text-main text-8xl italic uppercase mb-16">
        Before and after
      </div>
      <div className="flex gap-8">
        {testinomials.map((ele) => (
          <TestinomialCard data={ele} key={ele.name} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
