// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

/* eslint-disable react/prop-types */
const MainHeader = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.user);

  const token = localStorage.getItem('token');
  const user = verifyToken(token)

  return (
    <div className="relative w-full">
      <header className="bg-[#00C0B5] shadow-sm">
        <div className="flex justify-between items-center px-5 md:px-[100px] h-[80px]">
        <div
         onClick={() => navigate("/")}
        >
        <img
            src="/iBadi.png"
            className="w-[50px] h-[25px]"
            alt="User Avatar"
          />
        </div>
          <div className="flex">
            <div
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 cursor-default"
            >
              <img
                src="https://avatar.iran.liara.run/public/31"
                className="w-8 md:w-12 h-8 md:h-12 object-cover rounded-full"
                alt="User Avatar"
              />
              <h3 className="hidden md:block text-white text-lg font-semibold">
                {user?.role}
              </h3>
            </div>
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
