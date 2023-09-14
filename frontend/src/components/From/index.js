import React, { memo, useState } from "react";
import { Input } from "antd";
import styles from "./From.module.scss";

function From() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [passe, setPasse] = useState("");
  const [idr, setIdr] = useState("");
  const [addr, setAddr] = useState("");
  return (
    <>
      <div className={styles.inputTime}>
        <label>Name</label>
        <Input
          className={styles.put}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputTime}>
        <label>Phone Number</label>
        <Input
          className={styles.put}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className={styles.inputTime}>
        <label>Email Id</label>
        <Input
          className={styles.put}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputTime}>
        <label>Admin Password</label>
        <Input
          className={styles.put}
          value={passe}
          onChange={(e) => setPasse(e.target.value)}
        />
      </div>
      <div className={styles.inputTime}>
        <label>Id Proof</label>
        <Input
          className={styles.put}
          value={idr}
          onChange={(e) => setIdr(e.target.value)}
        />
      </div>
      <div className={styles.inputTime}>
        <label>Address</label>
        <Input
          className={styles.put}
          value={addr}
          onChange={(e) => setAddr(e.target.value)}
        />
      </div>
      <div className={styles.btn}>
        <button className={styles.submitBtn}>Submit</button>
      </div>
    </>
  );
}

export default memo(From);
