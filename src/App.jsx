import { useState } from "react";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/ui/Home";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
      if (
        location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/"
      ) {
        navigate("/home", { replace: true });
      }
    }
  }, [location, navigate]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </>
  );
}

export default App;
