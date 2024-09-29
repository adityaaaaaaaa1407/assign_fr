import React, { useState, useRef } from "react";
import LeftSide from "./LeftSide";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "./../store/authStore";
import toast from "react-hot-toast";

const EmailVerification: React.FC = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const { verifyEmail, error, isLoading } = useAuthStore();

  const handleChange = (index, value) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      const email = sessionStorage.getItem("signupEmail");
      await verifyEmail(email, verificationCode);
      navigate("/set-password");
      toast.success("Email verified successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-2 overflow-hidden min-h-screen">
      <LeftSide />

      {/* Right Side - Email Verification Form */}
      <div className="lg:px-20 px-12 text-white bg-[#11141F]">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/3fbb/eb23/f215cbe8b2bd64fe551bddbf5758556a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqNqhfV10eiQI1eXX2p-mZKIv2sKqMD5BQwJJpRy7yhSG~of0FgyiDygNv6z8498LafdeJdIPfsE6oQcvQjELqtuEETyqOBVjPlcgpcSKw96amMnDZGPI3JjZpeqxsUMojzV-VXWOwccdi1hgAb6NpFLEmm7mavbqbpWiVWa8BrXyMFgKCtUBbzg8pLAnZJRg9isQx8n2o4JmSKgnOy2WOrtI-EVL9Cinx2-tvgM51iWanLWMwyT-Gkp2RE5bGxlUkejZehC7aKI789roU-q4NV3tavSZIUMJ2QoAoQKZwwbGmWb-tWW1Iomupcnfr2TZ0gA8Br9DArnp8drFmHTFA__"
            alt=""
            className="mx-auto my-0 text-center h-28"
          />
        </div>
        <div className="bg-[#1E2230] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">ENTER OTP</h2>
          <p className="mb-8 text-[#D9D9D9]">
            Fill-in the 6-digit OTP you received in your email
          </p>
          <form onSubmit={handleVerify}>
            <label
              className="block text-lg font-semibold mb-4 text-[#D9D9D9]"
              htmlFor="otp"
            >
              OTP <span className="text-red-500">*</span>
            </label>
            <div className="flex justify-between mb-4">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="6" // Ensure only one digit per input
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-2xl font-bold bg-[#11141F] text-white border-2 border-[#34416D] rounded-lg focus:border-blue-500 focus:outline-none"
                />
              ))}
              {error && (
                <p className="text-red-500 font-semibold mt-2">{error}</p>
              )}
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                disabled={isLoading || code.some((digit) => !digit)}
                className="w-1/3 py-3 mb-6 bg-[#9747FF] rounded-md font-semibold hover:bg-indigo-600 transition text-[#FFFFFF]"
              >
                {isLoading ? "Verifying..." : "Confirm & Signup"}
              </button>
              <p className="p-4 mb-4">
                Didn’t receive OTP?{" "}
                <span className="text-[#9747FF]">Resend Now</span>
              </p>
            </div>
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
            <p className="text-xs text-center text-[#ADADAD] mb-12 py-2 px-2 border border-none bg-[#2B3043] rounded-md">
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

export default EmailVerification;
