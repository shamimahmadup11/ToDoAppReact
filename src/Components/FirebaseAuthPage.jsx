/* eslint-disable react/no-unescaped-entities */

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import app from "../Config/Auth";
import { useEffect } from "react";

const FirebaseAuthPage = () => {
  useEffect(() => {
    const auth = getAuth(app);
    console.log(auth.currentUser);
  }, []);

  const LoginWithGoogle = async () => {
    try {
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const Signout = async () => {
    try {
      const auth = getAuth(app);
      const response = await signOut(auth);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const LogUserData = async ()=>{

  }

  return (
    <div className="flex justify-center items-center h-screen px-4 pt-72">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md md:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Sign In
        </button>
        <div className="mt-4 text-center">Or continue with Google:</div>
        <button
          className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={LoginWithGoogle}
        >
          Sign in with Google
        </button>
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <a className="text-blue-500 hover:text-blue-700" href="#">
            Sign Up
          </a>
        </p>
        <div className="mt-4 text-center">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            onClick={Signout}
          >
            Sign Out
          </button>
        </div>
        <div className="mt-4 text-center">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            onClick={LogUserData}
          >
            Log User Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAuthPage;
