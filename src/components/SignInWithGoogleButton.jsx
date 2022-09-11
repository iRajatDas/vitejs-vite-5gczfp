import React from 'react';
import GoogleIcon from './Icon/GoogleIcon';

const SignInWithGoogleButton = () => {
  return (
    <a
      href="#"
      className="auth-btn font-medium text-black flex justify-center items-center rounded-lg bg-white text-sm px-5 py-3 border hover:bg-gray-100 duration-150 ease-in-out transition-all cursor-pointer"
    >
      <GoogleIcon />
      Log in with Google
    </a>
  );
};

export default SignInWithGoogleButton;
