import { ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO_URL } from "../utils/constants";

export const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="absolute top-0 left-0 z-20 flex justify-between items-center w-full px-16 py-2">
        <img
          src={LOGO_URL}
          width={160}
          alt="logo"
          className="object-contain"
        />
        <Link to={"/login"}>
          <button className="text-lg font-semibold rounded-md px-4 py-2 flex-shrink-0">
            Sign In
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-8">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
          width={290}
          alt="logo"
          className="object-contain mb-4"
        />
        <div className="text-center">
          <div className="font-semibold text-3xl text-center">
            Finish setting up your account
          </div>
          <br />
          <div className="text-xl text-center">
            Netflix is personalised for you. <br /> Create a password to watch
            on any device at any time.
          </div>
          <Link to={'/signup/regform'}>
          <button className="text-white text-xl font-semibold rounded-sm bg-[#F6121D] px-8 py-2 my-4 flex-shrink-0">
            Next
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const SignUpDetails = () => {

  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    
    const errorMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    
    setErrorMessage(errorMessage);
    if(errorMessage) return;
    
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;

      const array = ["seed", "plant", "user", "netflix", "c++", "java", "python", "nodejs", "react"];
      const diceBear = ["identicon", "jdenticon", "pixel-art-neutral", "pixel-art"];
  
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomIndexImg = Math.floor(Math.random() * diceBear.length);
  
      const randomElement = array[randomIndex];
      const randomImg = diceBear[randomIndexImg];
      
      const urlProfileImage = "https://api.dicebear.com/9.x/"+randomImg+"/svg?seed="+randomElement

      updateProfile(user, {
        photoURL: urlProfileImage
      })
      navigate("/home");
    })
    .catch((error) => {
      const errorMessage = error.message;
      setErrorMessage(errorMessage)
    });

  }

  return (
    <div className="flex flex-col pt-36 items-center h-screen">
      <div className="absolute top-0 left-0 z-20 flex justify-between items-center w-full px-16 py-2">
        <img
          src={LOGO_URL}
          width={160}
          alt="logo"
          className="object-contain"
        />
        <Link to={"/login"}>
          <button className="text-lg font-semibold rounded-md px-4 py-2 flex-shrink-0">
            Sign In
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div>
          <div className="font-semibold text-3xl">
          Create a password to start <br /> your membership
          </div>
          <br />
          <div className="text-lg">
            Just a few more steps and you're done!
            <br /> We hate paperwork, too.
          </div>
          <form  onSubmit={(e) => e.preventDefault()}>
            <input
              ref={email}
              type="text"
              placeholder="Email or mobile number"
              className="mt-6 p-4 text-sm border border-gray-700 rounded-sm w-full"
            />
             <input
              ref={password}
              type="password"
              placeholder="Add a password"
              className="mt-2 p-4 text-sm border border-gray-700 rounded-sm w-full"
            />
            <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
            <button onClick={handleSignUp} className="w-full mt-4 text-white text-lg font-semibold rounded-sm bg-[#F6121D] px-4 py-4">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute top-0 left-0 z-20 flex justify-between items-center w-full px-16 py-2">
          <img
            src={LOGO_URL}
            width={160}
            alt="logo"
            className="object-contain"
          />
          <Link to={"/login"}>
            <button className="text-white text-sm font-semibold rounded-md bg-[#C31119] px-4 py-2 flex-shrink-0">
              Sign In
            </button>
          </Link>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg"
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
          {/* Black gradient overlay */}
          <div className="relative z-10 text-center flex flex-col items-center justify-center text-white">
            <span className="text-5xl font-extrabold mt-10 mb-10">
              Unlimited movies, TV shows and more
            </span>
            <span className="text-lg mb-6">
              Watch anywhere. Cancel anytime.
            </span>
            <span className="text-lg">
              Ready to watch? Enter your email to create or restart your
              membership.
            </span>
            <div className="flex">
              <div>
                <input
                  className="mt-6 p-4 h-[50px] w-[500px] text-white text-sm bg-black bg-opacity-60 border border-gray-700 rounded-md"
                  type="text"
                  placeholder="Email address"
                />
              </div>
              <div>
                <Link to={"/sign-up"}>
                  <button className="mt-6 ms-2 p-3 rounded-md bg-[#F6121D] flex items-center justify-center">
                    Get Started <ChevronRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
