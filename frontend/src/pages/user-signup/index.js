import React, { memo } from "react";
import styles from "./User-singup.module.scss";
import { Input } from "antd";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.firstContainer}>
          <div className={styles.fromContainer}>
            <div className={styles.welcome}>Create New Account </div>
            <div className={styles.paragraph}>
              Set up your username and password. You can always change it later.
            </div>
            <div className={styles.inputContainer}>
              <Input
                size="large"
                placeholder="Name"
                prefix={<FaRegUser />}
                className={styles.userNameInput}
              />
            </div>
            <div className={styles.inputContainer}>
              <Input
                size="large"
                placeholder="Email"
                prefix={<MdOutlineEmail />}
                className={styles.mailInput}
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
              />
            </div>
            <div className={styles.inputContainer}>
              <Input.Password
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                prefix={<RiLockPasswordLine />}
                className={styles.rePassInput}
              />
            </div>
            <div className={styles.btn}>
              <Link to="/login">
                <button className={styles.loginBtn}>Sing Up</button>
              </Link>
            </div>
            <div className={styles.singLink}>
              Already have an account?<Link to="/login">Log in</Link>
            </div>
            <div className={styles.horizontal}>
              <hr />
              <div className={styles.middleName}>Or Sing in with</div>
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
        <div className={styles.secondContainer}>
          <div className={styles.text}></div>
        </div>
      </div>
    </>
  );
}

export default memo(Signup);
