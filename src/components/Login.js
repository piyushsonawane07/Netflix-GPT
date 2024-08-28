import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const errorMessage = checkValidData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(errorMessage);

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => { 
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    });
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-70 px-12 py-12 h-[620px] w-[460px]"
        >
          <h3 className="font-bold text-white text-2xl">Sign In</h3>
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="mt-6 p-4 text-white text-sm bg-black bg-opacity-60 border border-gray-700 rounded-md w-full"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mt-6 p-4 text-white text-sm bg-black bg-opacity-60 border border-gray-700 rounded-md w-full"
          />

          <span className="text-red-600 text-sm">{errorMessage}</span>
          <button
            onClick={handleButtonClick}
            className="mt-4 p-3 rounded-md bg-[#C31119] text-white font-semibold w-full"
          >
            Sign In
          </button>

          <h4 className="text-center text-white mt-4 text-sm cursor-pointer">
            Forgot password ?
          </h4>

          <h4 className="mt-5 cursor-pointer">
            <span className="text-gray-400 text-sm">New to Netflix?</span>
            <Link to={"/"}>
              <span className="text-white text-sm cursor-pointer mx-1">
                Sign up now.
              </span>
            </Link>
          </h4>

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
