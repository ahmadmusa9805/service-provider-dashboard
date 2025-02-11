import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function ChangePass() {
  const [isEyeOpen, setIsEyeOpen] = useState();

  return (
    <div className="bg-white px-20 w-[715px] pt-10 py-5 rounded-md">
      <p className="text-primary text-center font-bold text-xl mb-5">
        Change Password
      </p>
      <form className="space-y-4">
        <div className="w-full">
          <label
            htmlFor="password"
            className="text-[15px] font-[400] text-[#575757]"
          >
            Old Password
          </label>
          <div className="w-full relative">
            <input
              type={isEyeOpen ? "text" : "password"}
              name="oldPassword"
              id="oldPassword"
              placeholder="Old Password"
              className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
              required
            />
            {isEyeOpen ? (
              <IoEyeOutline
                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                onClick={() => setIsEyeOpen(false)}
              />
            ) : (
              <IoEyeOffOutline
                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                onClick={() => setIsEyeOpen(true)}
              />
            )}
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="password"
            className="text-[15px] font-[400] text-[#575757]"
          >
            New Password
          </label>
          <div className="w-full relative">
            <input
              type={isEyeOpen ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              placeholder="New Password"
              className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
              required
            />
            {isEyeOpen ? (
              <IoEyeOutline
                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                onClick={() => setIsEyeOpen(false)}
              />
            ) : (
              <IoEyeOffOutline
                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                onClick={() => setIsEyeOpen(true)}
              />
            )}
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="password"
            className="text-[15px] font-[400] text-[#575757]"
          >
            Confirm Password
          </label>
          <div className="w-full relative">
            <input
              type={isEyeOpen ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1"
              required
            />
            {isEyeOpen ? (
              <IoEyeOutline
                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                onClick={() => setIsEyeOpen(false)}
              />
            ) : (
              <IoEyeOffOutline
                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                onClick={() => setIsEyeOpen(true)}
              />
            )}
          </div>
        </div>

        <div className="text-center py-5">
          <button className="bg-[#00c0b5] text-white font-semibold w-full py-2 rounded transition duration-200">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePass;
