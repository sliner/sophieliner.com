
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const linkClass = ({ isActive }: { isActive: boolean }) => {
    if (isHomePage) {
      return `block py-3 md:py-1 text-sm tracking-[0.1em] transition-colors duration-200 ${
        isActive ? 'text-white font-medium' : 'text-white/60 hover:text-white'
      }`;
    }
    return `block py-3 md:py-1 text-sm tracking-[0.1em] transition-colors duration-200 ${
      isActive ? 'text-[#555555] font-medium' : 'text-gray-400 hover:text-[#555555]'
    }`;
  };

  return (
    <nav className={`w-full md:w-48 pt-10 pb-20 md:pb-0 px-8 md:px-0 text-center md:text-left ${isHomePage ? 'bg-transparent' : 'bg-white'}`}>
      <div className="flex flex-col space-y-1 md:space-y-4">
        <NavLink to="/videos" className={linkClass}>
          videos
        </NavLink>
        <NavLink to="/paintings" className={linkClass}>
          paintings & sculptures
        </NavLink>
        <NavLink to="/radio" className={linkClass}>
          radio
        </NavLink>
        <NavLink to="/film" className={linkClass}>
          film
        </NavLink>
        <NavLink to="/mix" className={linkClass}>
          mix
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          {"contact <3"}
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;