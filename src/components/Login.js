import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="relative h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"
          alt="bg"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Black gradient overlay */}
        <div className="relative z-10">{/* Your content goes here */}</div>
      </div>
      <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form className="bg-black bg-opacity-70 px-12 py-12 h-[700px] w-[500px]">
          <h3 className="font-bold text-white text-2xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h3>
          <input
            type="email"
            placeholder="Email or mobile number"
            className="mt-6 p-4 text-white text-sm bg-black bg-opacity-60 border border-gray-700 rounded-md w-full"
          />
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full name"
              className="mt-6 p-4 text-white text-sm bg-black bg-opacity-60 border border-gray-700 rounded-md w-full"
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="mt-6 p-4 text-white text-sm bg-black bg-opacity-60 border border-gray-700 rounded-md w-full"
          />
          {!isSignInForm && (
            <input
              type="password"
              placeholder="Re-enter Password"
              className="mt-6 p-4 text-white text-sm bg-black bg-opacity-60 border border-gray-700 rounded-md w-full"
            />
          )}
          <button className="mt-4 p-3 rounded-md bg-[#C31119] text-white font-semibold w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignInForm ? (
            <h4 className="text-center text-white mt-4 text-sm">
              Forgot password ?
            </h4>
          ) : (
            ""
          )}
          {isSignInForm ? (
            <h4 className="mt-5">
              <span className="text-gray-400 text-sm">New to Netflix?</span>
              <span
                className="text-white text-sm cursor-pointer"
                onClick={toggleSignInForm}
              >
                {" "}
                Sign up now.
              </span>
            </h4>
          ) : (
            <h4 className="mt-5">
              <span className="text-gray-400 text-sm">Already a user?</span>
              <span
                className="text-white text-sm cursor-pointer"
                onClick={toggleSignInForm}
              >
                {" "}
                Sign in now.
              </span>
            </h4>
          )}

          <h4 className="text-gray-400 mt-4 text-xs mr-14">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue-600 cursor-pointer">Learn more.</span>{" "}
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
