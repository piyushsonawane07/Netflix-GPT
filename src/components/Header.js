import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("failed to signout !");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black top-0 left-0 z-20 px-16 py-2 flex justify-between items-center">
      <img
        src={LOGO_URL}
        width={160}
        alt="logo"
        className="object-contain"
      />
      {user && (
        
        <div className="relative flex">
          <div className="mx-10">
          <button onClick={handleGptSearchClick} className="w-full mt-1 text-white text-sm font-semibold rounded-md bg-[#C31119]  px-2 py-2">{!showGptSearch ? "GPT Search" : "Home"}</button>
          </div>
          <img
            src={user.photoURL}
            width={40}
            alt="profile-image"
            className="cursor-pointer rounded-sm"
            onClick={toggleMenu}
          />
          
          {menuOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-black opacity-90 rounded-lg shadow-lg">
              <button
                onClick={handleSignOut}
                className="block px-4 py-2 text-white hover:text-gray-500 w-full text-left"
              >
                Sign out 
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
