import React, { useContext } from 'react';
import BannerAdBlock from './components/AdBlocks/BannerAdBlock';
import SquareAdBlock from './components/AdBlocks/SquareAdBlock';
import FAQ from './components/FAQ';
import FillCaptcha from './components/FillCaptcha';
import Header from './components/Header';
import SignInWithGoogle from './components/SignInWithGoogle';
import { AuthContext } from './context/AuthContext';

const App = () => {
  // const [isSignedIn, setSignedIn] = useState(false);
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="content">
      <Header />

      <BannerAdBlock />

      <div className="flex flex-col px-4 w-full ">
        <h1 className="heading_main">Fill out captcha to earn legit money.</h1>
        {currentUser ? <FillCaptcha /> : <SignInWithGoogle />}
      </div>

      <SquareAdBlock />
      <FAQ />
    </div>
  );
};

export default App;
