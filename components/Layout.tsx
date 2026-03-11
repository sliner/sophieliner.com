
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div 
      className={`min-h-screen flex flex-col md:flex-row relative transition-colors duration-500 ${isHomePage ? 'text-white' : 'bg-white text-gray-800'}`}
      style={isHomePage ? { 
        backgroundImage: 'url(https://i.postimg.cc/mbBJBFsT/Screenshot-2026-03-10-at-16-30-30.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      } : {}}
    >
      {/* Conditionally Render Top Center Home Button (not on home page) */}
      {!isHomePage && (
        <div className="w-full absolute top-8 left-0 flex justify-center z-50 pointer-events-none">
          <Link 
            to="/" 
            className="pointer-events-auto text-[10px] uppercase tracking-[0.5em] text-gray-800 hover:text-black transition-colors font-bold"
          >
            home
          </Link>
        </div>
      )}

      {/* Main Content Area - Order 1 on mobile, 2 on desktop */}
      <main className={`flex-1 px-8 pb-10 md:pb-20 order-1 md:order-2 overflow-y-auto flex justify-center ${isHomePage ? 'pt-12 md:pt-16 items-start' : 'pt-24 md:pt-32 md:pr-16 md:pl-0 md:justify-start'}`}>
        <div className={`${isHomePage ? 'w-full text-center' : 'w-full max-w-4xl'}`}>
          {children}
        </div>
      </main>

      {/* Sidebar container - Order 2 on mobile, 1 on desktop */}
      <div className="order-2 md:order-1 md:sticky md:top-0 md:h-screen flex items-start justify-center md:justify-start md:pl-16 md:pt-32 z-10">
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;