import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-green-700 bg-opacity-90 flex flex-col justify-center items-center z-50 animate-fade-in">
      {/* Logo and company name */}
      <div className="text-center animate-slide-up">
        <h1 className="text-5xl font-extrabold text-white">Evergreen Enviro Testing LLP</h1>
        <p className="mt-2 text-lg text-white/70">Your partner in environmental testing</p>
      </div>

      {/* Animated Spinner */}
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#ffffff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
