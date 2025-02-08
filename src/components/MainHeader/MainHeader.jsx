const MainHeader = () => {
  return (
    <div className="relative w-full">
      <header className="bg-[#00C0B5] shadow-sm">
        <div className="flex justify-between items-center px-[100px] h-[80px]">
          <img
            src="/iBadi.png"
            className="w-[50px] h-[25px]"
            alt="User Avatar"
          />

          <div className="flex items-center gap-2 cursor-default">
            <img
              src="https://avatar.iran.liara.run/public/31"
              className="w-8 md:w-12 h-8 md:h-12 object-cover rounded-full"
              alt="User Avatar"
            />
            <h3 className="hidden md:block text-white text-lg font-semibold">
              Mr. Admin
            </h3>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;

