import AboutImg from "../../../img/img2.png";

function About() {
  return (
    <div className="h-screen flex w-screen p-32 bg-background">
      <div className="w-1/2 py-32 pr-36">
        <div className="anton text-8xl text-main italic uppercase mb-4">
          About Us
        </div>
        <div className="hanken text-white text-3xl font-bold text-justify leading-[1.4]">
          Flex It Out is your AI-powered fitness buddy, tracking every push-up,
          squat, and rep you crush. Stay motivated, challenge friends, and climb
          the leaderboard as you level up your strength! With real-time AI
          monitoring, progress insights, and interactive challenges, we make
          every workout engaging and rewarding. Whether you're a beginner or a
          pro, Flex It Out keeps you pushing forward—one rep at a time!
        </div>
      </div>
      <img src={AboutImg} alt="Workout" className="w-1/2" />
    </div>
  );
}

export default About;
