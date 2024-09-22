import React from "react";
import styles from "./Spinner.module.css";
import Backdrop from "../Backdrop/Backdrop";
import loader from '../../images/loaderthird.gif';

function App() {
  return (
    <div>
      <Backdrop show={true} />
      <div className={styles.position}>
        <img src={loader} alt="Loader"></img>  
      </div>
    </div>
  );
}

export default App;
