import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import logo from '../../assets/logo.png';
import Button from '../Button/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-[10vh] flex justify-center shadow-md bg-[#FAFAFA] fixed top-0 left-0 z-50">
      <nav className="w-full flex items-center justify-between px-4 md:px-8">
        
        {/* This is the logo and brand name */}
        <div className="text-2xl font-normal flex items-center text-[#4A4A4A]">
          <img src={logo} alt="Digispace" className="w-8 h-8 mr-2" />
          <span className="text-gray-800">DIGISPACE</span>
        </div>

        {/* This is the desktop navigation links, hidden on small screens */}
        <div className="hidden lg:flex space-x-8 text-[1.5rem] font-normal">
          <a href="#" className="text-blue-600 font-semibold">Home</a>
          <a href="#" className="text-[#4A4A4A]">How It Works</a>
          <a href="#" className="text-[#4A4A4A]">Explore</a>
          <a href="#" className="text-[#4A4A4A]">Blog</a>
        </div>

        {/* This is the desktop login button, hidden on small screens */}
        <div className="hidden lg:flex">
          <Button
            text="Log In"
            icon={AiOutlineArrowRight}
            onClick={() => console.log('Log In clicked')}
            className="px-10 py-4"
          />
        </div>

        {/* This is the hamburger menu icon, only visible on mobile/tablet screens */}
        <div className="lg:hidden flex items-center z-50">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </nav>

      {/* This is the mobile menu, visible when the hamburger menu is toggled open */}
      {isOpen && (
        <div className="fixed top-[10vh] left-0 w-full bg-white shadow-md z-50 lg:hidden">
          <div className="flex flex-col items-center space-y-4 py-4 font-normal">
            <a href="#" className="text-blue-600 font-semibold">Home</a>
            <a href="#" className="text-[#4A4A4A]">How It Works</a>
            <a href="#" className="text-[#4A4A4A]">Explore</a>
            <a href="#" className="text-[#4A4A4A]">Blog</a>
            <Button
              text="Log In"
              icon={AiOutlineArrowRight}
              onClick={() => console.log('Log In clicked')}
              className="px-6 py-2"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
