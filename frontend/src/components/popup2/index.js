import React, { memo } from "react";
import styles from "./popup.module.scss";
import From from "../From";
import { CgCloseO } from "react-icons/cg";

const Popup2 = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className={styles.overly}>
        <div className={styles.container}>
          <div className={styles.close} onClick={onClose}>
            <CgCloseO />
          </div>
          <div className={styles.fromContainer}>
            <div className={styles.heading}>Spiritual Tourism</div>
            <h2 className={styles.paragraph}>
              Register as a Holistic Organisation
            </h2>
            <From />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Popup2);
