
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12 animate-in fade-in duration-1000 flex flex-col items-center md:items-start">
      <header className="w-full text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#444444]">
          Sophie Liner
        </h1>
        <p className="text-[11px] md:text-sm italic tracking-[0.3em] text-gray-400 font-light mt-4 lowercase">
          video artist
        </p>
      </header>

      <section className="w-full max-w-3xl aspect-video bg-white overflow-hidden relative">
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGwzcjRuZDk4cGszMWVmOHFhdTZ0aDg0dnJtaG4wN2s2bGUwdXNxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vHnxzVLyh85D84NMop/giphy.gif"
          alt="Sophie Liner Featured"
          className="w-full h-full object-cover transition-all duration-1000 opacity-100"
        />
      </section>
    </div>
  );
};

export default Home;