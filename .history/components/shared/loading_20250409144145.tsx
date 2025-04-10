import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white bg-opacity-80 z-50 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-green-700">Evergreen Enviro Testing LLP</h1>
        <p className="mt-2 text-lg text-green-500">We are testing your environment...</p>
      </div>

      {/* Loader Spinner */}
      <div className="w-20 h-20 border-8 border-t-8 border-green-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
