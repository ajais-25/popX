import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const SignupForm = () => {
  const [fullName, setFullName] = useState("Marry Doe");
  const [phone, setPhone] = useState("Marry Doe");
  const [email, setEmail] = useState("Marry Doe");
  const [password, setPassword] = useState("Marry Doe");
  const [company, setCompany] = useState("Marry Doe");
  const [isAgency, setIsAgency] = useState("yes");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      phone,
      email,
      password,
      company,
      isAgency,
    };

    console.log("Form submitted:", formData);

    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-3xl font-semibold mb-6">
          Create your <br /> PopX account
        </h1>

        <InputField
          type="text"
          name="fullName"
          label="Full Name"
          placeholder="Enter full name"
          state={fullName}
          setState={setFullName}
          isRequired={true}
        />

        <InputField
          type="tel"
          name="phone"
          label="Phone Number"
          placeholder="Enter phone number"
          state={phone}
          setState={setPhone}
          isRequired={true}
        />

        <InputField
          type="text"
          name="email"
          label="Email Address"
          placeholder="Enter email address"
          state={email}
          setState={setEmail}
          isRequired={true}
        />

        <InputField
          type="text"
          name="password"
          label="Password"
          placeholder="Enter password"
          state={password}
          setState={setPassword}
          isRequired={true}
        />

        <InputField
          type="text"
          name="company"
          label="Company Name"
          placeholder="Enter company name"
          state={company}
          setState={setCompany}
          isRequired={false}
        />

        <p className="text-sm font-medium text-black mb-2">
          Are you an Agency?
          <span className="text-red-600">*</span>
        </p>
        <div className="flex items-center mb-6">
          <label className="mr-6 flex items-center space-x-2">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={isAgency === "yes"}
              onChange={(e) => setIsAgency(e.target.value)}
              className="size-5 accent-[#6c25ff]"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={isAgency === "no"}
              onChange={(e) => setIsAgency(e.target.value)}
              className="size-5 accent-[#6c25ff]"
            />
            <span>No</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6C25FF] text-white py-2 rounded font-medium cursor-pointer hover:bg-purple-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
