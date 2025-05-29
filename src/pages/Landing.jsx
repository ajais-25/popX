import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9]">
      <div className="w-[400px] h-[700px] bg-white shadow-md border border-gray-100 flex flex-col justify-end px-6 py-10">
        <div>
          <h1 className="text-2xl text[#1D2226] font-bold mb-2">
            Welcome to PopX
          </h1>
          <p className="text[#1D2226] opacity-[60%] w-[80%] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <button
            className="w-full bg-[#6C25FF] hover:bg-purple-700 text-white py-3 cursor-pointer rounded-md font-medium mb-3"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
          <button
            className="w-full bg-[#6C25FF4B] hover:bg-purple-300 text-black py-3 cursor-pointer rounded-md font-medium"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
