import { Link } from "react-router-dom";
import Logo from "../../img/Flex-it-out-Logo.png";
function Navbar() {
  return (
    <div className="w-full h-28 py-4 xl:h-32 flex items-center justify-start">
      <Link to="/home">
        <img src={Logo} alt="Flex It Out Logo" className="mt-6 h-20 xl:h-28" />
      </Link>
    </div>
  );
}

export default Navbar;
