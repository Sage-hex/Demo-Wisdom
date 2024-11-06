import React from 'react';

const Button = ({ text, onClick, icon: Icon, className }) => {
  return (
    <button
      className={`flex items-center px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 ${className}`}
      onClick={onClick}
    >
      {text}
      {Icon && <Icon className="ml-2" />}
    </button>
  );
};

export default Button;
