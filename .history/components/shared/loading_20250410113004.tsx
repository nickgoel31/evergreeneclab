import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-green-600 bg-opacity-90 flex flex-col justify-center items-center z-50 animate-fade-in">
      {/* Logo and company name */}
      <div className="text-center mb-8 animate-slide-up">
        <h1 className="text-5xl font-extrabold text-white">Evergreen Enviro Testing LLP</h1>
        <p className="mt-2 text-lg text-green-500">Your partner in environmental testing</p>
      </div>

      {/* Animated Spinner */}
      <div className="w-24 h-24 border-8 border-t-8 border-green-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
