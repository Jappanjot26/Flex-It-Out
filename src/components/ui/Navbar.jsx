import { Link } from "react-router-dom";
import Logo from "../../img/Flex-it-out-Logo.png";
function Navbar() {
  return (
    <div className="w-full h-32 py-4 flex items-center">
      <Link to="/home">
        <img src={Logo} alt="Flex It Out Logo" className="mt-6 h-28" />
      </Link>
    </div>
  );
}

export default Navbar;
