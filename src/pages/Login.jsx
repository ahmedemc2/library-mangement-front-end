import React from "react";
import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white py-8 px-6 rounded-lg shadow-md min-w-80 w-sm md:w-sm mx-3">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Library Management Login
        </h2>
        <form>
          <InputField
            name="email"
            type="text"
            label="Email"
            valid={true}
            required={true}
          />
          <InputField
            name="password"
            type="password"
            label="Password"
            valid={true}
            required={true}
            className="mt-3.5"
          />
          <div className="flex mt-10 justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 w-full cursor-pointer "
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?
          <a href="/login" className="text-blue-500 ml-1 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
