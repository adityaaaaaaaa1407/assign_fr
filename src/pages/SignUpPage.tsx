import React, { useState } from "react";
import LeftSide from "./LeftSide";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "./../store/authStore";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-2  overflow-hidden min-h-screen">
      <LeftSide />
      {/* Right Side - Sign Up Form */}

      <div className="lg:px-20 px-12 text-white bg-[#11141F]">
        <div className=" ">
          <img
            src="https://s3-alpha-sig.figma.com/img/3fbb/eb23/f215cbe8b2bd64fe551bddbf5758556a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqNqhfV10eiQI1eXX2p-mZKIv2sKqMD5BQwJJpRy7yhSG~of0FgyiDygNv6z8498LafdeJdIPfsE6oQcvQjELqtuEETyqOBVjPlcgpcSKw96amMnDZGPI3JjZpeqxsUMojzV-VXWOwccdi1hgAb6NpFLEmm7mavbqbpWiVWa8BrXyMFgKCtUBbzg8pLAnZJRg9isQx8n2o4JmSKgnOy2WOrtI-EVL9Cinx2-tvgM51iWanLWMwyT-Gkp2RE5bGxlUkejZehC7aKI789roU-q4NV3tavSZIUMJ2QoAoQKZwwbGmWb-tWW1Iomupcnfr2TZ0gA8Br9DArnp8drFmHTFA__"
            alt=""
            className="mx-auto my-0 text-center h-28"
          />
        </div>
        <div className="bg-[#1E2230] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <p className="mb-8 text-[#D9D9D9]">
            Hello there! Looks like you are new here, Sign Up now.
          </p>
          <form action="" onSubmit={handleSignUp}>
            {/* Email Input */}
            <label
              className="block text-lg font-semibold mb-4 text-[#D9D9D9]"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email id like abc1234@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button className="w-1/3 py-3 mb-6 bg-[#9747FF] rounded-md font-semibold hover:bg-indigo-600 transition text-[#FFFFFF]">
              Generate OTP
            </button>
          </form>
          <div className="flex items-center justify-center mb-8">
            <hr className="border-gray-600 flex-grow" />
            <span className="px-4 text-sm text-gray-400">OR</span>
            <hr className="border-gray-600 flex-grow" />
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
              <img
                src="https://s3-alpha-sig.figma.com/img/9690/3368/9b71a1845255c9f583f1866f305d4aec?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hARyJcwtO8B4g5VBCFEt49tF-9jQ~9kvJlKTHF0D9ihG22TRw8W1W9fWBbb6WFhoSWAxXJV~wCipDsiZBS~8VUghi2cVuJnZhnH0uhfH3zOuPs7XxPiymkdxU48E7x14W0-xfe30tzxgGYmChY8~51~Mk9suxaC9hvM-lZCmXh4w7c9oWUwnlfjMYlPZf6Un2QDBdssCvbw53IMpF~T-iZCGGs~VC8gC86m5fUSUSDCX115kDESLiurJ8kgn-YLOpF9dWIstxh617ejxnG0QnkdSwIv0MqjxPEjuhiw5rJH7YqguGk-W59V574DYr4EZskx5P2Kqnhf7aHFHsXbHQA__"
                alt="Google"
                className="w-6 h-6"
              />
            </button>
            <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
              <img
                src="https://s3-alpha-sig.figma.com/img/ee8c/7c24/5d20ff7d587fc9fb522d2ac2153049d6?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DcIjr-3K-7~tCeb5BHmYvD0iSgsOjqF3EJpiWDPA~oj6xd8qOapVJQ5ROL2QpU-phevZCSTXGwvwRPcaOzrhJQ7bFvivk9jIuIu6Ca7n4Hm31YCauZ0gbgOt6EkJcFqNePNfGgJzaJucfnQT4u-gFgg6F~gx8Kjibmv9mFHHZLaLVn0WrUpmzde2~5c4D6-O-UIh3Nk7CmEMbkATyIaIiykpBLCuW5HledjnVFKTVHj~nJplaRMH5fg8tfrRXa9MPeq-6SXO7vehS4MOfTlDTIwrU~-2zDZfXBt-R2mqgXub-3Zoy52HXelpdR4s76mAXpHeXmG6579S02gCzoK6qw__"
                alt="Microsoft"
                className="w-6 h-6"
              />
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-xs text-center text-[#ADADAD] mb-12 py-2 px-2  border border-none bg-[#2B3043] rounded-md ">
              <span className="text-[#9747FF]">Note: </span> &nbsp;Signing up
              via Google saves your time ~20 seconds
            </p>
          </div>
          <div className="mb-0">
            <p className="text-sm text-center text-[#D9D9D9]">
              Already have an account?{" "}
              <Link to={"/login"} className="text-[#9747FF] hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
