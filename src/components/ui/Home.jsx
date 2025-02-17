import Logo from "../../img/Flex-it-out-Logo.png";
import Hero from "./home/Hero";
import About from "./home/About";
import Features from "./home/Features";
import Reviews from "./home/Reviews";
import Footer from "./home/Footer";
import Excercise from "./Excercise";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="overflow-hidden">
      <Excercise />
      {/* <Hero />
      <About />
      <Features />
      <Reviews />
      <Footer /> */}
    </div>
  );
}

export default Home;
