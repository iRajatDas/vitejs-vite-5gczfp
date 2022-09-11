import React, { useContext, useState } from 'react';
import GoogleIcon from './Icon/GoogleIcon';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';

const SignInWithGoogleButton = () => {
  const [error, setError] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch({ type: 'LOGIN', payload: user });
        // console.log(
        //   `credential: ${credential}`,
        //   `token: ${token}`,
        //   `user: ${user}`
        // );
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(true);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // console.log(
        //   `errorCode: ${errorCode}`,
        //   `errorMessage: ${errorMessage}`,
        //   `email: ${email}`,
        //   `credential: ${credential}`
        // );
      });
  };
  return (
    <button
      onClick={GoogleLogin}
      className="auth-btn font-medium text-black flex justify-center items-center rounded-lg bg-white text-sm px-5 py-3 border hover:bg-gray-100 duration-150 ease-in-out transition-all cursor-pointer"
    >
      <GoogleIcon />
      Log in with Google
    </button>
  );
};

export default SignInWithGoogleButton;
