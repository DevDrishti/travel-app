import React, { memo } from "react";
import styles from "./About.module.scss";

function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.firstContainer}>
          <div className={styles.paras}>
            “YatraYugIndia” a platform , where we one can find a all in one
            assured tourist guidance and complete package that consists of
            experiential tourism, spiritual tourism, wildlife tourism and
            natural rehabilitation tourism.
          </div>
          <div className={styles.paras}>
            “YatraYugIndia” puts customers first thus they can customise their
            trip thus they are happy. Our easy to access UI helps customers
            choose their trip easily and efficiently. Moreover we are also
            available on the mobile applications, thus making us “on the go”
            service providers.
          </div>
          <div className={styles.paras}>
            Atithi Devo Bhava meaning that we treat our guests as Gods. Our
            customers are nothing less. Thus it is safe to say that our platform
            is a "customer centric business model". Moreover we have a zero
            tolerance towards customer safety and security.
          </div>
          <div className={styles.paras}>
            "United we stand, Divided we fall" thereby India being the land of
            unity in diversity our team YatraYugIndia focuses on making itself a
            platform where a personal can find everything when it comes to
            tourism in India.
          </div>
        </div>
        <div className={styles.secodContainer}></div>
      </div>
    </>
  );
}
export default memo(About);
