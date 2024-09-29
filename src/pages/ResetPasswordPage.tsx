import { useState } from "react";
import Input from "../components/Input";
import PasswordStrengthMeter from "../components/PasswordStrength";
import LeftSide from "./LeftSide";
import { useAuthStore } from "./../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, error, isLoading, message } = useAuthStore();

  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await resetPassword(token, password);

      toast.success(
        "Password reset successfully, redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error resetting password");
    }
  };
  return (
    <div className="grid grid-cols-2  overflow-hidden min-h-screen">
      <LeftSide />

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
          <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {message && <p className="text-green-500 text-sm mb-4">{message}</p>}

          <p className="mb-8 text-[#D9D9D9]">
            This will take some effort, Relax and then get started!
          </p>
          <form action="" onSubmit={handleSubmit}>
            <label
              className="block text-lg font-semibold mb-4 text-[#D9D9D9]"
              htmlFor="password"
            >
              Set-up your 8+ digits password
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Start entering your new password here..."
            />
            <label
              className="block text-lg font-semibold mb-4 text-[#D9D9D9]"
              htmlFor="password"
            >
              Confirm New Password
            </label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Start entering your new password here..."
            />
            <PasswordStrengthMeter password={password} />
            <button
              type="submit"
              disabled={isLoading}
              className="w-1/3 py-2  mt-8 bg-[#9747FF] rounded-md font-semibold hover:bg-indigo-600 transition text-[#FFFFFF]"
            >
              {isLoading ? "Resetting..." : "Save & Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
