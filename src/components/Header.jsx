import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Header = () => {
  const { dispatch } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const logOutUser = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch({ type: 'LOGOUT' });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="box border-b">
      <div className="flex justify-between items-center">
        <div className="flex group justify-start gap-x-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 rotate-12 text-emerald-500 group-hover:text-green-700 duration-200 transition-all ease-in-out"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM6 5.75A.75.75 0 016.75 5h6.5a.75.75 0 010 1.5h-2.127c.4.5.683 1.096.807 1.75h1.32a.75.75 0 010 1.5h-1.32a4.003 4.003 0 01-3.404 3.216l1.754 1.754a.75.75 0 01-1.06 1.06l-3-3a.75.75 0 01.53-1.28H8c1.12 0 2.067-.736 2.386-1.75H6.75a.75.75 0 010-1.5h3.636A2.501 2.501 0 008 6.5H6.75A.75.75 0 016 5.75z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-emerald-500 font-bold text-xl group-hover:text-green-700 duration-200 transition-all ease-in-out leading-none">
            Captcha Earn
          </h1>
        </div>
        {currentUser && (
          <div className="">
            <button
              onClick={(e) => logOutUser(e)}
              role="button"
              className="text-emerald-600 flex items-center space-x-2 justify-center"
            >
              <span className="grid place-items-center p-2 h-8 w-8 bg-emerald-100 rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
