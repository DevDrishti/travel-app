import React, { memo } from "react";
import styles from "./User-info.module.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Info() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.firstContainer}>
          <div className={styles.userDiv}>
            <div className={styles.userImg}>
              <Avatar size={84} icon={<UserOutlined />} />
            </div>
            <div className={styles.name}>Alexa Dev</div>
          </div>
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.uInfo}>
            <div className={styles.hInfo}>User Details</div>
            <div className={styles.dText}>
              <div className={styles.fText}>Name: </div>
              <div className={styles.sText}>Alexa Dev</div>
            </div>
            <div className={styles.dText}>
              <div className={styles.fText}>Email: </div>
              <div className={styles.sText}>alexa@gmail.com</div>
            </div>
            <div className={styles.dText}>
              <div className={styles.fText}>Phone: </div>
              <div className={styles.sText}>+91 8597092567</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(Info);
