import React, { useState, useEffect, useContext } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from '../lib/react-simple-captcha';

const FillCaptcha = () => {
  const CAPTCHA_LIMIT = 100;

  const [userCurrentBalance, setUserCurrentBalance] = useState(0);
  const [userCompletedCaptchaCount, setUserCompletedCaptchaCount] = useState(0);
  const { currentUser } = useContext(AuthContext);

  const HandleSubmit = (e) => {
    e.preventDefault();

    //Validate
    let user_captcha = document.getElementById('user_captcha_input').value;

    if (validateCaptcha(user_captcha) == true) {
      alert('Captcha Matched');
      loadCaptchaEnginge(6);
      document.getElementById('user_captcha_input').value = '';
      setUserCurrentBalance((prevBalance) => prevBalance + 1);
      setUserCompletedCaptchaCount(
        (prevCompletedCaptchaCount) => prevCompletedCaptchaCount + 1
      );
      fireStoreData();
      //window.location.reload();
    } else {
      alert('Captcha Does Not Match');
      document.getElementById('user_captcha_input').value = '';
    }
  };

  const readableTime = (miliseconds) => {
    const date = new Date(miliseconds);
    const readableDateTime = date.toLocaleString();
    return readableDateTime;
  };

  const fireStoreData = async () => {
    await setDoc(doc(db, 'Users', currentUser.uid), {
      name: currentUser.displayName,
      last_login: currentUser.metaData.lastSignInTime,
      email: currentUser.email,
    });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="play">
      <div className="mt-5 bg-emerald-100 w-full rounded-xl border border-emerald-200 px-4 py-3">
        <header className="flex justify-between">
          <div className="balance font-medium flex justify-between items-center gap-x-1">
            <span>Balance:</span>
            <span className="text-emerald-500 font-bold" id="user-balance">
              {userCurrentBalance}
            </span>
          </div>
          <div className="limit font-medium flex justify-between items-center gap-x-1">
            <span>Completed:</span>
            <span
              className="text-emerald-500"
              id="user-remaining-captcha-count"
            >
              {userCompletedCaptchaCount}
              <span className="font-bold">/{CAPTCHA_LIMIT}</span>
            </span>
          </div>
        </header>
        <div className="canvas mt-4">
          <form className="">
            <div id="captcha" className="mx-auto">
              <LoadCanvasTemplateNoReload />
            </div>
            <div className="flex flex-col gap-3.5 justify-start">
              <input
                type="text"
                placeholder="Enter Captcha Value"
                id="user_captcha_input"
                name="user_captcha_input"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button
                type="submit"
                role="button"
                className="w-full sm:w-auto flex-none bg-gray-900 text-white text-lg leading-4 font-medium py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 text-center"
                onClick={(event) => HandleSubmit(event)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FillCaptcha;
