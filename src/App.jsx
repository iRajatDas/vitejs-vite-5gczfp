import React from 'react';
import BannerAdBlock from './components/AdBlocks/BannerAdBlock';
import SquareAdBlock from './components/AdBlocks/SquareAdBlock';
import FAQ from './components/FAQ';
import FillCaptcha from './components/FillCaptcha';
import Header from './components/Header';
import SignInWithGoogle from './components/SignInWithGoogle';

const App = () => {
  return (
    <div className="content">
      <Header />

      <BannerAdBlock />

      <div className="flex flex-col px-4 w-full ">
        <h1 className="heading_main">Fill out captcha to earn legit money.</h1>
        <SignInWithGoogle />
        <FillCaptcha />
      </div>

      <SquareAdBlock />
      <FAQ />
    </div>
  );
};

export default App;
