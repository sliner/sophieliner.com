
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) => 
    `block py-3 md:py-1 text-sm tracking-[0.1em] transition-colors duration-200 ${
      isActive ? 'text-[#555555] font-medium' : 'text-gray-400 hover:text-[#555555]'
    }`;

  return (
    <nav className="w-full md:w-48 pt-10 pb-20 md:pb-0 px-8 md:px-0 bg-white text-center md:text-left">
      <div className="flex flex-col space-y-1 md:space-y-4">
        <NavLink to="/videos" className={linkClass}>
          videos
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