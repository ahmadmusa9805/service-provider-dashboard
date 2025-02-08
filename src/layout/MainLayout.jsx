import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MainHeader from "../components/MainHeader/MainHeader";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="h-screen">
      <MainHeader toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="p-5 overflow-y-auto bg-white h-[100vh]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
