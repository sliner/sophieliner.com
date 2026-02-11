
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) => 
    `block py-1 text-sm transition-colors duration-200 ${
      isActive ? 'text-[#555555] font-medium' : 'text-gray-400 hover:text-[#555555]'
    }`;

  return (
    <nav className="w-full md:w-48 pt-6 pb-20 md:pb-0 px-8 md:px-0 bg-white text-center md:text-left">
      <div className="space-y-4">
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