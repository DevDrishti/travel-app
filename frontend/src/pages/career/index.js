import React, { memo, useState } from "react";
import styles from "./Career.module.scss";
import Popup1 from "../../components/popup1";
import Popup2 from "../../components/popup2";
import Popup3 from "../../components/popup3";
import Popup4 from "../../components/popup4";

function Career() {
  const [pop, setPop] = useState(false);
  const [pops, setPops] = useState(false);
  const [pop1, setPop1] = useState(false);
  const [pop2, setPop2] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nextContainer}>
          <div className={styles.divContainer}>
            <Popup1 open={pop} onClose={() => setPop(false)} />
            <Popup2 open={pops} onClose={() => setPops(false)} />
            <Popup3 open={pop1} onClose={() => setPop1(false)} />
            <Popup4 open={pop2} onClose={() => setPop2(false)} />
            <div className={styles.content1}>
              <div className={styles.fContent}>
                <div className={styles.hading}> Experiential Tourism</div>
                <div className={styles.about}>
                  Register In our platform as a workshop organiser or as a
                  seller and get a chance to work with us.
                </div>
              </div>
              <div className={styles.sContent}>
                <div className={styles.btn}>
                  <button
                    className={styles.regBtn}
                    onClick={() => setPop(true)}
                  >
                    Register Now
                  </button>
                  <Popup1 open={pop} />
                </div>
              </div>
            </div>
            <div className={styles.content2}>
              <div className={styles.fContent}>
                <div className={styles.hading}> Spiritual Tourism</div>
                <div className={styles.about}>
                  Register In our platform as a holistic organisation and get a
                  chance to reach wider sum of people.
                </div>
              </div>
              <div className={styles.sContent}>
                <div className={styles.btn}>
                  <button
                    className={styles.regBtn}
                    onClick={() => setPops(true)}
                  >
                    Register Now
                  </button>
                  <Popup2 open={pops} />
                </div>
              </div>
            </div>
            <div className={styles.content3}>
              <div className={styles.fContent}>
                <div className={styles.hading}> Medical Tourism</div>
                <div className={styles.about}>
                  Register In our platform as a holistic organisation and get a
                  chance to reach wider sum of people .
                </div>
              </div>
              <div className={styles.sContent}>
                <div className={styles.btn}>
                  <button
                    className={styles.regBtn}
                    onClick={() => setPop1(true)}
                  >
                    Register Now
                  </button>
                  <Popup3 open={pop1} />
                </div>
              </div>
            </div>
            <div className={styles.content4}>
              <div className={styles.fContent}>
                <div className={styles.hading}>Wildlife Tourism</div>
                <div className={styles.about}>
                  Register In our platform as a holistic organisation and get a
                  chance to reach wider sum of people .
                </div>
              </div>
              <div className={styles.sContent}>
                <div className={styles.btn}>
                  <button
                    className={styles.regBtn}
                    onClick={() => setPop2(true)}
                  >
                    Register Now
                  </button>
                  <Popup4 open={pop2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(Career);
