import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-5">
      <div className="container mx-auto">
        <div className="flex  justify-center items-center">
          <div className="w-full lg:w-1/2 bg-white p-5 md:px-18 md:py-28 shadow-[0px_10px_30px_rgba(0,0,0,0.2)] rounded-2xl">
            <h2 className="text-[#0D0D0D] text-2xl md:text-3xl font-bold text-center mb-5">
              Set a new password
            </h2>
            <p className="text-[#0D0D0D] text-center mb-8">
              Create a new password. Ensure it differs from previous ones for
              security
            </p>
            <form className="space-y-6">
              <div className="w-full">
                <label className="text-xl text-[#0D0D0D] mb-2">Password</label>
                <div className="w-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Demo@123"
                    className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="w-full">
                <label className="text-xl text-[#0D0D0D] mb-2">Password</label>
                <div className="w-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Demo@123"
                    className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => navigate("/sign-in")}
                  type="button"
                  className="w-1/4 bg-[#00C0B5] text-white font-semibold py-2 rounded-lg shadow-lg cursor-pointer mt-5"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
