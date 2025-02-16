import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-nav w-full h-16 p-2 flex items-center">
      <Link className="text-dark font-bold text-2xl" to="/home">
        💪 Flex-It-Out
      </Link>
    </div>
  );
}

export default Navbar;
