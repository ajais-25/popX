import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-[#F7F8F9]">
      <div className="h-full w-full max-w-md p-8 bg-white rounded-lg shadow-md flex flex-col">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold my-3 text-slate-800">
            <div className="flex flex-col">
              <span>Signin to your</span>
              <span>PopX account</span>
            </div>
          </h1>
          <p className="text-gray-500 my-3 flex flex-col">
            <span>Lorem ipsum dolor sit amet,</span>
            <span>consectetur adipisicing elit.</span>
          </p>
        </div>
        <form className="space-y-4">
          <div className="flex flex-col relative mb-6">
            <label
              htmlFor="email"
              className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col relative mb-6">
            <label
              htmlFor="password"
              className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#CBCBCB] text-white font-semibold rounded-md cursor-pointer hover:bg-gray-400"
            onClick={() => navigate("/profile")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
