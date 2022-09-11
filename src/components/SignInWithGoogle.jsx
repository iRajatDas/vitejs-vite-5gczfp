import React from 'react';
import SignInWithGoogleButton from './SignInWithGoogleButton';

const SignInWithGoogle = () => {
  return (
    <div className="mt-5 bg-white min-h-[12.5rem] w-full rounded-xl border px-4 py-3 flex flex-col justify-center items-center">
      <h3 className="pb-4 font-semibold text-lg text-gray-600 leading-6">
        Sign in to start
      </h3>
      <SignInWithGoogleButton />
    </div>
  );
};

export default SignInWithGoogle;
