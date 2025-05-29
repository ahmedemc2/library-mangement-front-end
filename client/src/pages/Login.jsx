import React, { useState } from "react";
import { FaUserCircle, FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../store/userSlice";
import API from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanFormData = {
      email: email,
      password: password,
    };

    try {
      const response = await API.post("/login", cleanFormData);

      console.log(response);

      if (response.status === 200) {
        const { user, token } = response.data.data;
        dispatch(login({ user, token }));

        switch (user.role) {
          case "MEMBER":
            navigate("/app/books");
            break;
          case "ADMIN":
            navigate("/admin");
            break;
        }
      }
    } catch (err) {
      console.log(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 relative">
      {/* Flèche de retour vers la landing page */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-gray-400 hover:text-white text-xl transition"
      >
        <FaArrowLeft />
      </Link>

      <div className="w-full max-w-md bg-gray-800 bg-opacity-90 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle className="text-6xl text-gray-400 mb-2" />
          <h2 className="text-2xl font-semibold">Login</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?
          <Link to="/register" className="ml-1 text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
