import React, { useState } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { useDispatch } from "react-redux";

import { login } from "../store/userSlice";
import API from "../services/api";

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isMinCharacter, setIsMinCharacter] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false);
  const [isContaineNumber, setIsContainNumber] = useState(false);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

  const [isConfirmPassword, setIsConfirmPassword] = useState(true);

  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const [validData, setValidData] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    switch (name) {
      case "password":
        setIsMinCharacter(/^.{9,}$/.test(value));
        setIsUppercase(/[A-Z]/.test(value));
        setIsSpecialCharacter(/[^A-Za-z0-9]/.test(value));
        setIsContainNumber(/\d/.test(value));
        setValidPassword(
          (prev) =>
            prev &&
            isMinCharacter &&
            isUppercase &&
            isSpecialCharacter &&
            isContaineNumber
        );
        break;
      case "confirmPassword":
        setIsConfirmPassword(
          () => formData.password === formData.confirmPassword
        );
        break;

      case "firstName":
        setValidFirstName(/^[A-Za-z ]{2,50}$/.test(value));
        break;

      case "lastName":
        setValidLastName(/^[A-Za-z ]{2,50}$/.test(value));
        break;

      case "email":
        setValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value));
        break;
    }

    setValidData(
      validFirstName &&
        validLastName &&
        validEmail &&
        validPassword &&
        isConfirmPassword
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;
    const cleanFormData = {
      name: firstName.trim() + " " + lastName.trim(),
      email: email.trim(),
      password: password,
    };
    try {
      const response = await API.post("/users", cleanFormData);

      if (response.status === 201) {
        const { user, token } = response.data.data;
        dispatch(login({ user, token }));
      }

      //! Don't Forget To redirect when the registration is okay
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  const inputsData = [
    {
      id: "InputFieldN-1Z",
      type: "text",
      name: "firstName",
      label: "First Name",
      value: formData.firstName,
      required: true,
      valid: validFirstName,
      errorMessage:
        "Please Enter a valid First Name, it should only containe Alphabetic characters",
    },
    {
      id: "InputFieldN-2Z",
      type: "text",
      name: "lastName",
      label: "Last Name",
      value: formData.lastName,
      required: true,
      valid: validLastName,
      errorMessage:
        "Please Enter a valid Last Name, it should only containe Alphabetic characters",
    },
    {
      id: "InputFieldN-3Z",
      type: "email",
      name: "email",
      label: "Email",
      value: formData.email,
      required: true,
      valid: validEmail,
      errorMessage:
        "Please Enter a valid Email, For example: example@domain.com",
    },
    {
      id: "InputFieldN-4Z",
      type: isPasswordHidden ? "text" : "password",
      name: "password",
      label: "Password",
      value: formData.password,
      required: true,
      valid:
        validPassword ||
        (isMinCharacter &&
          isUppercase &&
          isSpecialCharacter &&
          isContaineNumber),
    },
    {
      id: "InputFieldN-5Z",
      type: isConfirmPasswordHidden ? "text" : "password",
      name: "confirmPassword",
      label: "Confirm Password",
      value: formData.confirmPassword,
      required: true,
      valid:
        formData.confirmPassword.length === 0 ||
        formData.confirmPassword === formData.password,
      errorMessage:
        "Your password don't match. Please enter your password again to confirm it.",
    },
  ];
  const passwordVerification = [
    {
      id: "Verification-N1MN",
      text: "Minimum 8 characters",
      valid: isMinCharacter,
    },
    { id: "passVerification-2Br", text: "1 uppercase", valid: isUppercase },
    {
      id: "Verification-N2MN",
      text: "Atleast 1 special character",
      valid: isSpecialCharacter,
    },
    {
      id: "Verification-N3MN",
      text: "Atleast 1 number",
      valid: isContaineNumber,
    },
  ];

  console.log("what happens");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 min-w-sm">
      <div className="bg-white py-8 px-4 mt-6 rounded-lg shadow-md w-sm md:w-[80%] lg:w-[60%]">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Library Management Register
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row flex-wrap gap-3 justify-center md:justify-start"
        >
          {inputsData.map((inputData, index) => {
            const IconPasword = isPasswordHidden ? LuEye : LuEyeClosed;
            const IconConfirmPassword = isConfirmPasswordHidden
              ? LuEye
              : LuEyeClosed;
            return (
              <div
                key={inputData.id}
                className={`mb-2 w-[90%] md:w-[47%] relative ${
                  index === 4 && "mt-22 md:mt-0"
                }`}
              >
                <label
                  htmlFor={inputData.name}
                  className="block text-gray-700 mb-2"
                >
                  {inputData.label}
                </label>
                <input
                  type={inputData.type}
                  id={inputData.name}
                  name={inputData.name}
                  value={inputData.value}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-md border-2 outline-none ${
                    inputData?.valid ? "border-gray-500" : "border-red-500"
                  }`}
                  required
                />
                {index === 3 && (
                  <>
                    <span
                      onClick={() => setIsPasswordHidden((prev) => !prev)}
                      className="select-none absolute w-8 top-10 right-1 aspect-square flex justify-center items-center hover:bg-gray-200 rounded-full cursor-pointer"
                    >
                      <IconPasword className="text-xl text-gray-500" />
                    </span>
                    <div className="absolute w-full top-20 flex flex-wrap gap-x-4 gap-y-2.5">
                      {passwordVerification.map((verification) => {
                        return (
                          <p
                            key={verification.id}
                            className={`${
                              verification.valid
                                ? "bg-green-100 text-green-500"
                                : "bg-gray-200 text-gray-500"
                            }  font-semibold text-sm py-0.5 px-2 rounded-xl flex justify-center items-center gap-1.5`}
                          >
                            <FaCheck size={10} /> {verification.text}
                          </p>
                        );
                      })}
                    </div>
                  </>
                )}
                {index === 4 && (
                  <span
                    onClick={() => setIsConfirmPasswordHidden((prev) => !prev)}
                    className="select-none absolute w-8 top-10 right-1 aspect-square flex justify-center items-center hover:bg-gray-200 rounded-full cursor-pointer"
                  >
                    <IconConfirmPassword className="text-xl text-gray-500" />
                  </span>
                )}
                {index !== 3 && !inputData.valid && (
                  <p className="text-red-500 font-semibold text-sm py-0.5 px-2 rounded-xl w-fit">
                    {inputData.errorMessage}
                  </p>
                )}
              </div>
            );
          })}
          <div className="w-[90%] md:w-full flex mt-10 justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 w-full md:w-[48%] cursor-pointer "
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?
          <a href="/login" className="text-blue-500 ml-1 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
