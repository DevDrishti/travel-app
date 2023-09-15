import React, { memo, useState } from "react";
import styles from "./Hotel.module.scss";
import { Input } from "antd";

function Hotel() {
  const [name1, setName1] = useState("");
  const [pn, setPn] = useState("");
  const [mails, setMails] = useState("");
  const [pass2, setPass2] = useState("");
  const [ider, setIder] = useState("");
  const [ad, setAdd] = useState("");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hades}>Register as a Hotel</div>
        <div className={styles.inputTime}>
          <label>Name</label>
          <Input
            className={styles.put}
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
        </div>
        <div className={styles.inputTime}>
          <label>Phone Number</label>
          <Input
            className={styles.put}
            value={pn}
            onChange={(e) => setPn(e.target.value)}
          />
        </div>
        <div className={styles.inputTime}>
          <label>Email Id</label>
          <Input
            className={styles.put}
            value={mails}
            onChange={(e) => setMails(e.target.value)}
          />
        </div>
        <div className={styles.inputTime}>
          <label>Admin Password</label>
          <Input
            className={styles.put}
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />
        </div>
        <div className={styles.inputTime}>
          <label>Id Proof</label>
          <Input
            className={styles.put}
            value={ider}
            onChange={(e) => setIder(e.target.value)}
          />
        </div>
        <div className={styles.inputTime}>
          <label>Address</label>
          <Input
            className={styles.put}
            value={ad}
            onChange={(e) => setAdd(e.target.value)}
          />
        </div>
        <div className={styles.btn}>
          <button className={styles.submitBtn}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default memo(Hotel);
