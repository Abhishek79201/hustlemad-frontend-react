import React from "react";
import styles from "./Spinner.module.css";
import Backdrop from "../Backdrop_Spinner/Backdrop";
// import animation from '../Popup/animation.gif';
// import loader from '../../images/loaderthird.gif';
import animationData from '../../images/RocketLoader.json';
import Lottie from 'react-lottie';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Backdrop show={true} />
      <div className={styles.position}>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
        />
      </div>
    </div>
  );
}

export default App;
