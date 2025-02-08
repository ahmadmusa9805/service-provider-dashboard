import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-5">
      <div className="container mx-auto">
        <div className="flex  justify-center items-center">
          <div className="w-full lg:w-1/2 bg-white p-5 md:px-18 md:py-28 shadow-[0px_10px_30px_rgba(0,0,0,0.2)] rounded-2xl">
            <h2 className="text-[#0D0D0D] text-2xl md:text-3xl font-bold text-center mb-5">
              Login to Account
            </h2>
            <p className="text-[#0D0D0D] text-center mb-8">
              Please enter your email and password to continue.
            </p>
            <form className="space-y-6">
              <div>
                <label className="text-xl text-[#0D0D0D] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="demo@example.com"
                  className="w-full p-2 border-2 border-[#F2F2F2] rounded-md outline-none text-md"
                  required
                />
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
              <div className="flex justify-between items-center text-sm my-5">
                <label className="flex items-center gap-[10px] cursor-pointer">
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={handleCheckboxChange}
                  />
                  {isChecked ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group 335">
                        <rect
                          id="Rectangle 331"
                          x="-0.00012207"
                          y="6.10352e-05"
                          width="20"
                          height="20"
                          rx="4"
                          className="fill-[#00C0B5]"
                          stroke="#00C0B5"
                        ></rect>
                        <path
                          id="Vector"
                          d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                          fill="white"
                        ></path>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group 335">
                        <rect
                          id="Rectangle 331"
                          x="-0.00012207"
                          y="6.10352e-05"
                          width="20"
                          height="20"
                          rx="4"
                          className="fill-transparent"
                          stroke="#00C0B5"
                        ></rect>
                      </g>
                    </svg>
                  )}

                  <span className="text-[1.2rem] text-[#424242]">
                    Remember Password
                  </span>
                </label>
                <Link to="/forget-password" className="text-[#D93D04] text-xl">
                  Forgot Password?
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => navigate("/")}
                  type="button"
                  className="w-1/4 bg-[#00C0B5] text-white font-semibold py-2 rounded-lg shadow-lg cursor-pointer mt-5"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
