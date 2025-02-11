/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { IoMdInformationCircleOutline, IoMdSettings } from "react-icons/io";
import { IoBagAddOutline, IoCloseSharp, IoLogInOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";
import { TbBrandWechat } from "react-icons/tb";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if current path matches a menu item
  const isActive = (path) => currentPath === path;

  // Check if any settings submenu is active
  const isSettingsActive = currentPath.startsWith("/setting");

  return (
    <div
      className={`fixed lg:static bg-white text-[#0D0D0D] w-[20%] h-screen overflow-y-auto py-5 md:py-0 z-50 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
      // className="w-[20%]"
    >
      {/* Close Button (Mobile Only) */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 lg:hidden text-white bg-[#0D0D0D] focus:outline-none p-2 rounded-full"
      >
        <IoCloseSharp />
      </button>

      {/* Sidebar Menu */}
      <ul className="mt-10 px-5">
        {/* Dashboard */}
        <li
          className={`flex items-center gap-4 cursor-pointer ${
            isActive("/")
              ? "bg-[#00C0B5] text-white px-5 py-4 rounded-l-4xl"
              : ""
          }`}
        >
          <RxDashboard className="w-8 h-8 text-xl font-semibold" />
          <Link className="text-xl font-semibold" to="/">
            Dashboard
          </Link>
        </li>

        {/* User Details */}
        <li
          className={`flex items-center gap-4 mt-8 cursor-pointer ${
            isActive("/user-details")
              ? "bg-[#00C0B5] text-white px-5 py-4 rounded-l-4xl"
              : ""
          }`}
        >
          <FaRegUser className="w-8 h-8 text-xl font-semibold" />
          <Link className="text-xl font-semibold" to="/user-details">
            User Details
          </Link>
        </li>

        {/* Add Service */}
        <li
          className={`flex items-center gap-4 mt-8 ${
            isActive("/services")
              ? "bg-[#00C0B5] text-white px-5 py-4 rounded-l-4xl"
              : ""
          }`}
        >
          <IoBagAddOutline className="w-8 h-8 text-xl font-semibold" />
          <Link className="text-xl font-semibold" to="/services">
            Add Service
          </Link>
        </li>
        {/* Chat */}
        <li
          className={`flex items-center gap-4 mt-8 ${
            isActive("/chat")
              ? "bg-[#00C0B5] text-white px-5 py-4 rounded-l-4xl"
              : ""
          }`}
        >
          <TbBrandWechat className="w-8 h-8 text-xl font-semibold" />
          <Link className="text-xl font-semibold" to="/chat">
            Chat
          </Link>
        </li>

        {/* Settings */}
        <li
          className={`flex justify-between items-center gap-4 mt-8 cursor-pointer py-2 ${
            isSettingsActive
              ? "bg-[#00C0B5] text-white pl-5 pr-2 py-4 rounded-l-4xl"
              : ""
          }`}
        >
          <div className="flex flex-row justify-between items-center gap-2">
            <IoMdSettings className="w-8 h-8 text-xl font-semibold" />
            <Link className="text-xl font-semibold" to="/settings">
              Settings
            </Link>
          </div>
          <SlArrowDown className="w-8 h-5 text-xl font-bold" />
        </li>

        {/* Settings Submenu */}
        {isSettingsActive && (
          <ul className="text-start py-3 ml-5">
            <li
              className={`py-[5px] flex items-center gap-2 ${
                isActive("/setting/about-us") ? "text-[#00c0b5]" : ""
              }`}
            >
              <IoMdInformationCircleOutline className="w-5 h-5 text-lg font-semibold" />
              <Link className="text-lg font-semibold" to="/setting/about-us">
                About Us
              </Link>
            </li>
            <li
              className={`py-[6px] flex items-center gap-4 ${
                isActive("/setting/privacy-policy") ? "text-[#00c0b5]" : ""
              }`}
            >
              <MdOutlinePrivacyTip className="w-5 h-5 text-lg font-semibold" />
              <Link
                className="text-lg font-semibold"
                to="/setting/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li
              className={`py-[6px] flex items-center gap-4 ${
                isActive("/setting/faq") ? "text-[#00c0b5]" : ""
              }`}
            >
              <GoQuestion className="w-5 h-5 text-lg font-semibold" />
              <Link className="text-lg font-semibold" to="/setting/faq">
                FAQ
              </Link>
            </li>
            <li
              className={`py-[5px] flex gap-2 items-center ${
                isActive("/setting/terms-and-condition") ? "text-[#00c0b5]" : ""
              }`}
            >
              <FaRegBookmark className="w-5 h-5 text-lg font-semibold" />
              <Link
                className="text-lg font-semibold"
                to="/setting/terms-and-condition"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        )}
      </ul>

      {/* Logout Button */}
      <div className="absolute mt-8 md:mt-20 lg:mt-20 xl:mt-20 w-full px-4">
        <Link to="/sign-in">
          <button className="flex items-center gap-4 w-full py-3 rounded-lg">
            <IoLogInOutline className="w-8 h-8 text-xl font-semibold" />
            <span className="text-xl font-semibold">Logout</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
