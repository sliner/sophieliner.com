
import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Sidebar container - no visible frontier */}
      <div className="md:sticky md:top-0 md:h-screen flex items-start md:items-start justify-start md:pl-16 md:pt-20 z-10">
        <Sidebar />
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 px-8 py-10 md:py-20 md:pr-16 md:pl-0 overflow-y-auto">
        <div className="max-w-4xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
