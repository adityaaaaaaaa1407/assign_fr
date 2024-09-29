import React, { useState } from "react";
import LeftSide from "./LeftSide";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "./../store/authStore";
import { Loader } from "lucide-react";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };
  return (
    <div className="grid grid-cols-2  overflow-hidden min-h-screen">
      <LeftSide />

      {/* Right Side - Sign Up Form */}
      <div className="lg:px-20 px-12 text-white bg-[#11141F]">
        {/* <img src="/asd.png" alt="" /> */}
        <div className=" ">
          <img
            src="https://s3-alpha-sig.figma.com/img/3fbb/eb23/f215cbe8b2bd64fe551bddbf5758556a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqNqhfV10eiQI1eXX2p-mZKIv2sKqMD5BQwJJpRy7yhSG~of0FgyiDygNv6z8498LafdeJdIPfsE6oQcvQjELqtuEETyqOBVjPlcgpcSKw96amMnDZGPI3JjZpeqxsUMojzV-VXWOwccdi1hgAb6NpFLEmm7mavbqbpWiVWa8BrXyMFgKCtUBbzg8pLAnZJRg9isQx8n2o4JmSKgnOy2WOrtI-EVL9Cinx2-tvgM51iWanLWMwyT-Gkp2RE5bGxlUkejZehC7aKI789roU-q4NV3tavSZIUMJ2QoAoQKZwwbGmWb-tWW1Iomupcnfr2TZ0gA8Br9DArnp8drFmHTFA__"
            alt=""
            className="mx-auto my-0 text-center h-28"
          />
        </div>
        <div className="bg-[#1E2230] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
          <p className="mb-8 text-[#D9D9D9]">
            Before resetting, think of all possible passwords!
          </p>

          {!isSubmitted ? (
            <form action="" onSubmit={handleSubmit}>
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
                required
              />

              <button
                type="submit"
                className="w-1/3 py-3 mb-6 bg-[#9747FF] rounded-md font-semibold hover:bg-indigo-600 transition text-[#FFFFFF]"
              >
                {isLoading ? (
                  <Loader className="size-6 animate-spin mx-auto" />
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>
          ) : (
            <p className="text-gray-300 mb-6">
              If an account exists for {email}, you will receive a password
              reset link shortly.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
