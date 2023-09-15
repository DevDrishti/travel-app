import React, { memo, useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Splash from "../../components/splash";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <div className={styles.container}>
          <h1>nskdfvsk</h1>
          <h2>jsndcnfs</h2>
        </div>
      )}
    </>
  );
}
export default memo(Home);
