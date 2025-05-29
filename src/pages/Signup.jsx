import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "Mary Doe",
    phone: "Mary Doe",
    email: "Mary Doe",
    password: "Mary Doe",
    company: "Mary Doe",
    isAgency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here
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

        <div className="flex flex-col relative mb-6">
          <label
            htmlFor="fullName"
            className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3"
          >
            Full Name
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col relative mb-6">
          <label
            htmlFor="phone"
            className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3"
          >
            Phone Number
            <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col relative mb-6">
          <label
            htmlFor="email"
            className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3"
          >
            Email address
            <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col relative mb-6">
          <label
            htmlFor="password"
            className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3"
          >
            Password
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col relative mb-6">
          <label
            htmlFor="company"
            className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3"
          >
            Company Name
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
            placeholder="Enter company name (optional)"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

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
              checked={formData.isAgency === "yes"}
              onChange={handleChange}
              className="size-5 accent-[#6c25ff]"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={formData.isAgency === "no"}
              onChange={handleChange}
              className="size-5 accent-[#6c25ff]"
            />
            <span>No</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6C25FF] text-white py-2 rounded font-medium cursor-pointer hover:bg-purple-700 transition"
          onClick={() => navigate("/profile")}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
