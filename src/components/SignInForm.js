import classes from "./Form.module.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import image from "../assets/image1.png";
import { useState } from "react";
import { email, required } from "../util/validators";
import { Link } from "react-router-dom";
const SigninForm = () => {
  const [values, setValues] = useState({
    email: "",
    emailTouched: false,
    password: "",
    passwordTouched: false,
  });

  const [showPassword, setShowPassword] = useState({ visible: false });
  const valid = {
    email: true,
    password: true,
  };

  //all email states
  const emailChangeHandler = (event) => {
    setValues((prev) => ({ ...prev, email: event.target.value }));
  };

  const emailBlurHandler = () => {
    setValues((prev) => ({ ...prev, emailTouched: true }));
  };

  //all password states
  const passwordHandler = (event) => {
    setValues((prev) => ({ ...prev, password: event.target.value }));
  };

  const passwordBlurHandler = () => {
    setValues((prev) => ({ ...prev, passwordTouched: true }));
  };

  const passwordVisiblityHandler = (event) => {
    event.preventDefault();
    setShowPassword((prev) => ({ visible: !prev.visible }));
  };

  if (!email(values.email) && values.emailTouched) {
    valid.email = false;
  }
  if (!required(values.password) && values.passwordTouched) {
    valid.password = false;
  }
  return (
    <div className={classes.form}>
      <div className={classes.image}>
        <img src={image} alt="welcome" />
      </div>
      <form autoComplete="off">
        <h3 style={{ textDecoration: "none", letterSpacing: "2px" }}>
          Welcome!
        </h3>
        <div>
          <MdEmail
            style={{ color: "#142A40", fontSize: "14px", marginRight: "6px" }}
          />
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            value={values.email}
            className={!valid.email ? classes.error : ""}
          />
        </div>
        <div>
          <RiLockPasswordFill
            style={{ color: "#142A40", fontSize: "14px", marginRight: "6px" }}
          />
          <input
            id="password"
            value={values.password}
            type={showPassword.visible ? "text" : "password"}
            placeholder="password"
            onChange={passwordHandler}
            className={!valid.password ? classes.error : ""}
            onBlur={passwordBlurHandler}
          />
          <button className={classes.eyes} onClick={passwordVisiblityHandler}>
            {showPassword.visible ? (
              <BiShow style={{ color: "#142A40" }} />
            ) : (
              <BiHide style={{ color: "#ccc" }} />
            )}
          </button>
        </div>
        <section>
          <Link className = {classes.link} to = "signup/">Don't have an account?</Link>
          <button type="Submit" className={classes.submit}>
            Log in
          </button>
        </section>
      </form>
    </div>
  );
};

export default SigninForm;
