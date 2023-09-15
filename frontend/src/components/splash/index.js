import React, { memo } from "react";
import styles from "./Splash.module.scss";

function Splash() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}></div>
      </div>
    </>
  );
}

export default memo(Splash);
