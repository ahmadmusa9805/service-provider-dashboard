function EditProfile() {
  return (
    <div className="bg-white px-20 w-[715px] py-5 rounded-md">
      <p className="text-[#0D0D0D] text-center font-bold text-xl mb-5">
        Edit Your Profile
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-md font-medium text-[#0D0D0D] mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            className="w-full p-2 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter full name"
            required
          />
        </div>

        <div>
          <label className="block text-md font-medium text-[#0D0D0D] mb-2">
            Contact No
          </label>
          <input
            type="text"
            name="contactNo"
            className="w-full p-2 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Contact Number"
            required
          />
        </div>

        <div>
          <label className="block text-md font-medium text-[#0D0D0D] mb-2">
            Address
          </label>
          <input
            type="text"
            name="location"
            className="w-full p-2 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Address"
            required
          />
        </div>

        <div>
          <label className="block text-md font-medium text-[#0D0D0D] mb-2">
            Username
          </label>
          <input
            type="text"
            name="userName"
            className="w-full p-2 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            placeholder="Enter Username"
            required
          />
        </div>

        <div>
          <label className="block text-md font-medium text-[#0D0D0D mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            className="w-full p-2 border-2 border-[#F2F2F2] rounded-md focus:outline-none text-md"
            required
          />
        </div>

        <div className="text-center py-5">
        <button
          className="bg-[#00c0b5] text-white font-semibold w-full py-2 rounded transition duration-200"
        >
          Save changes
        </button>
      </div>
      </form>
    </div>
  );
}

export default EditProfile;
