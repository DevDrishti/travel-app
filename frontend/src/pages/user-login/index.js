import React, { memo, useState } from "react";
import styles from "./Login.module.scss";
import { Input } from "antd";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
//import { FaFacebook } from "react-icons/fa";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [entry, setEntry] = useState("");

  const submitFrom = (e) => {
    e.preventDefault();
    const newEntry = { mail: mail, pass: pass };
    setEntry([...entry, newEntry]);
    console.log(entry);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.secondContainer}>
          <div className={styles.fromContainer}>
            <div className={styles.welcome}>Welcome Back</div>
            <div className={styles.paragraph}>
              Log in to your account using email or social networks
            </div>
            <from action="" onSubmit={submitFrom}>
              <div className={styles.inputContainer}>
                <Input
                  size="large"
                  placeholder="Email"
                  prefix={<MdOutlineEmail />}
                  className={styles.mailInput}
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <div className={styles.inputContainer}>
                <Input.Password
                  placeholder="Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  prefix={<RiLockPasswordLine />}
                  className={styles.passInput}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div className={styles.forgotLink}>
                <Link to="/forgot">Forgot Password?</Link>
              </div>
              <div className={styles.btn}>
                <Link to="/">
                  <button className={styles.loginBtn} type="submit">
                    Log In
                  </button>
                </Link>
              </div>
            </from>
            <div className={styles.singLink}>
              First time here?<Link to="/signup">Sign up</Link>
            </div>
            <div className={styles.horizontal}>
              <hr />
              <div className={styles.middleName}>Or Sign in with</div>
              <hr />
            </div>
            <div className={styles.singIn}>
              <a href="https://accounts.google.com/v3/signin/identifier?ifkv=AXo7B7WizgG6HA02xPwevtqvaYOAdaz72GLmAeSa5fzemCI16fbX02-dnKgwE7j0rDG7mAmAvk2X&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S704912713%3A1692640631045656">
                <button className={styles.googleBtn}>
                  <FcGoogle />
                  Google
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Login);
