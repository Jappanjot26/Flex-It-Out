import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default Home;
