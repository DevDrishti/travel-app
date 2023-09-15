import React, { memo, useState } from "react";
import styles from "./User-singup.module.scss";
import { Input } from "antd";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Signup() {

 
  const [Name,setName]=useState('')
  const [Email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  let userData={
    name:Name,
    email:Email,
    password:Password
  }
  const sendData=async (evt)=>{
        await fetch("http://localhost:5000/signup",{
          method:'POST',
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          },
          body:JSON.stringify(userData)
        }).then(res=>res.json()).then(data=>console.log(data))
        console.log(userData)
  }

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
                name="Name"
                size="large"
                placeholder="Name"
                prefix={<FaRegUser />}
                className={styles.userNameInput}
                //value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <Input
              name="Email"
                size="large"
                placeholder="Email"
                prefix={<MdOutlineEmail />}
                className={styles.mailInput}
               // value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <Input.Password
                name="Password"
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                prefix={<RiLockPasswordLine />}
                className={styles.passInput}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <Input.Password
                placeholder="Re-enter Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                prefix={<RiLockPasswordLine />}
                className={styles.rePassInput}
                //value={rpass}
                //onChange={(e) => setRpass(e.target.value)}
              />
            </div>
            <div className={styles.btn}>
              <Link onClick={sendData} to="/login">
                <button className={styles.loginBtn}>Sign Up</button>
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
      </div>
    </>
  );
              }

export default memo(Signup);
