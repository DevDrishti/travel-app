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
          <div className={styles.hContent}>
            <div className={styles.content1}>
              <div className={styles.interDiv}>
                <div className={styles.topLine}>Experiential Tourism</div>
                <div className={styles.para}>
                  Experiential tourism is a type of travel that prioritizes
                  immersive and hands-on experiences over traditional
                  sightseeing. Travelers actively engage with a destination's
                  culture to connect more deeply with the place they are
                  visiting.
                </div>
                <div className={styles.price}>Starting from: ₹500</div>
              </div>
            </div>
            <div className={styles.content2}>
              <div className={styles.interDiv}>
                <div className={styles.topLine}>Spiritual Tourism</div>
                <div className={styles.para}>
                  Spiritual tourism involves traveling to destinations or
                  engaging in experiences that are deeply connected to one's
                  spiritual or religious beliefs.
                </div>
                <div className={styles.price}>Starting from: ₹800</div>
              </div>
            </div>
            <div className={styles.content3}>
              <div className={styles.interDiv}>
                <div className={styles.topLine}>Medical Tourism</div>
                <div className={styles.para}>
                  The board manages things like which player's turn it is,
                  placing a move, checking if the game is over, etc.
                  Board.internal is the internal representation of the game
                  board. It is a one-dimensional array of numbers.
                </div>
                <div className={styles.price}>Starting from: ₹1000</div>
              </div>
            </div>
            <div className={styles.content4}>
              <div className={styles.interDiv}>
                <div className={styles.topLine}>Wildlife Tourism</div>
                <div className={styles.para}>
                  Wildlife tourism is a form of travel that centers around
                  observing and interacting with wildlife in their natural
                  habitats. Travelers visit destinations known for their rich
                  biodiversity and ecosystems to experience encounters.
                </div>
                <div className={styles.price}>Starting from: ₹1500</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default memo(Home);
