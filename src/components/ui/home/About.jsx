import AboutImg from "../../../img/img2.png";
import Navbar from "../Navbar";
function About() {
  return (
    <div className="h-screen flex w-screen xl:p-32 py-8 px-8 bg-background flex-col-reverse xl:flex-row">
      <div className="xl:w-1/2 xl:py-32 py-4 xl:pr-36 w-full">
        <div className="anton xl:text-8xl text-6xl text-main italic uppercase mb-4 xl:mt-0 mt-8">
          About Us
        </div>
        <div className="hanken text-white xl:text-3xl text-md font-bold text-justify leading-[1.4]">
          Flex It Out is your AI-powered fitness buddy, tracking every push-up,
          squat, and rep you crush. Stay motivated, challenge friends, and climb
          the leaderboard as you level up your strength! With real-time AI
          monitoring, progress insights, and interactive challenges, we make
          every workout engaging and rewarding. Whether you're a beginner or a
          pro, Flex It Out keeps you pushing forward—one rep at a time!
        </div>
      </div>
      <img src={AboutImg} alt="Workout" className="xl:w-1/2 w-full" />
    </div>
  );
}

export default About;
