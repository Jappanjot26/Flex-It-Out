import { Link, useNavigate } from "react-router-dom";
import login from "../svg/loginIllustration.svg";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
// import { handleError, handleSuccess } from "../../utils";

function Login() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = info;
    if (!email || !password) {
      return handleError("Please fill all the fields");
    }
    try {
      const url = `${
        import.meta.env.VITE_BACKEND_URL || "http://localhost:5174"
      }/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      const res = await response.json();
      if (res.success) {
        handleSuccess(res.message);
        localStorage.setItem("token", res.jwtToken);
        localStorage.setItem("loggedInUser", res.email);
        localStorage.setItem("saved", JSON.stringify(res.saved));
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else if (res.error) {
        handleError(res.error?.details[0].message);
      } else if (!res.success) {
        handleError(res.message);
      }
    } catch (error) {
      handleError(error.message);
    }
  };
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center py-2 px-5 md:mx-0 md:my-0 bg-background relative">
      <div className="absolute top-0 left-0 text-white p-4 text-xl">
        💪Flex-It-Out
      </div>
      <div className="md:w-1/3 max-w-sm">
        <img
          src={login}
          alt="Sample image"
          className="max-md:h-72 max-md:w-72"
        />
      </div>
      <form className="md:w-1/3 max-w-sm" onSubmit={handleSubmit}>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded focus:outline-none focus:ring text-white focus:border-blue-300"
          type="email"
          id="email"
          name="email"
          value={info.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 focus:outline-none focus:ring focus:border-blue-300 text-white"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={info.password}
          placeholder="Password"
        />
        {/* <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label> 
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div> */}
        <div className="text-center md:text-left flex justify-center">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          {"Don't have an account?"}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/register"
          >
            Register
          </Link>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Login;
