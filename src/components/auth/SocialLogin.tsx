import React from 'react';

export function SocialLogin() {
  return (
    <div className="space-y-4">
      <button className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg border transition-colors">
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
        <span>Continue with Google</span>
      </button>
      
      <button className="w-full flex items-center justify-center space-x-2 bg-[#1877F2] hover:bg-[#1864D9] text-white font-medium py-2 px-4 rounded-lg transition-colors">
        <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
        <span>Continue with Facebook</span>
      </button>
      
      <button className="w-full flex items-center justify-center space-x-2 bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors">
        <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5" />
        <span>Continue with Apple</span>
      </button>
    </div>
  );
}