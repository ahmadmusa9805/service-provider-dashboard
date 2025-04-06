import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Lucide icons for burger/close
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);


    const AdminItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        // { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
        // { name: 'Login', href: '/login' },
      ];
    const ClientItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        // { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
        { name: 'Register', href: '/register' },
        { name: 'Login', href: '/login' },
      ];

      const role = 'client';	
      const navItems = role === 'admin' ? AdminItems : ClientItems;

  return (
    <div>

        <div className="flex flex-col justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600 bg-white p-8 w-full">MyApp</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-col space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
   

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-2 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block text-gray-700 hover:text-blue-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

    </div>
  );
};

export default Sidebar;