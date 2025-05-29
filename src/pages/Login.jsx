import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
    };

    console.log("Form submitted:", formData);

    navigate("/profile");
  };

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
          <InputField
            type="email"
            name="email"
            label="Email"
            placeholder="Enter email"
            state={email}
            setState={setEmail}
            isRequired={false}
          />
          <InputField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter password"
            state={password}
            setState={setPassword}
            isRequired={false}
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#CBCBCB] text-white font-semibold rounded-md cursor-pointer hover:bg-gray-400"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
