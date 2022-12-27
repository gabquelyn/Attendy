import classes from "./Form.module.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import image from "../assets/image.png";
import { useState } from "react";
import { email } from "../util/validators";
const Form = () => {


  const validityStatus = {
    email: true,
    password: true,
    finalPassword: true
  }

  const [passwordValue, setPasswordValue] = useState({
    firstTrial: "",
    trialIsVisible: false,
    secondTrial: "",
  });

  const [finalPassword, setFinalPassword] = useState(true);

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  
  const [emailValue, setEmailValue] = useState("");

  //All blur handlers
  const emailBlurHandler = () => {
    setTouched((prevState) => ({ ...prevState, email: true }));
  };
  const setPasswordBlur = () => {
    setTouched((prevState) => ({ ...prevState, password: true }));
  };

  const setSecondPasswordBlurHandler = () => {
    setTouched((prevState) => ({ ...prevState, confirmPassword: true }));
  };

  //password setting states
  const firstPasswordHandler = (event) => {
    setPasswordValue((prevState) => ({
      ...prevState,
      firstTrial: event.target.value,
    }));
    const status = event.target.value === passwordValue.secondTrial;
    setFinalPassword(status)
  };

  const secondPasswordHandler = (event) => {
    setPasswordValue((prevState) => ({
      ...prevState,
      secondTrial: event.target.value,
    }));
    const status = passwordValue.firstTrial === event.target.value;
    setFinalPassword(status)
  };

  const emailChangeHandler = (event) => {
    setEmailValue(event.target.value);
  };


  //toggle the input form password to text
  const passwordVisibleHandler = (event) => {
    event.preventDefault();
    setPasswordValue((prevState) => ({
      ...prevState,
      trialIsVisible: !prevState.trialIsVisible,
    }));
  };

  const isValidEmail = email(emailValue);
  
 

  if(touched.email && !isValidEmail){
    validityStatus.email = false;
  }
  if(!passwordValue.firstTrial && touched.password){
    validityStatus.password = false;
  }

  
  // const validConfirmPassword = touched.confirmPassword && !validityStatus.finalPassword
  // console.log(finalPassword)

  return (
    <div className={classes.form}>
      <div className={classes.image}>
        <img src={image} alt="welcome" />
      </div>
      <form autoComplete="off">
        <h3>Sign up</h3>
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
            value={emailValue}
            className = {!validityStatus.email ? classes.error : ""}
          />
        </div>
        <div>
          <RiLockPasswordFill
            style={{ color: "#142A40", fontSize: "14px", marginRight: "6px" }}
          />
          <input
            id="password"
            value={passwordValue.firstTrial}
            type={passwordValue.trialIsVisible ? "text" : "password"}
            placeholder="password"
            onChange={firstPasswordHandler}
            className = {!validityStatus.password ? classes.error : ""}
            onBlur={setPasswordBlur}
          />
        </div>
        <div>
          <RiLockPasswordLine
            style={{ color: "#142A40", fontSize: "14px", marginRight: "6px" }}
          />
          <input
            id="repeat password"
            value={passwordValue.secondTrial}
            type={passwordValue.trialIsVisible ? "text" : "password"}
            placeholder="Repeat your password"
            onChange={secondPasswordHandler}
            onBlur={setSecondPasswordBlurHandler}
            className = {!finalPassword? classes.error : ""}
          />
          <button className={classes.eyes} onClick={passwordVisibleHandler}>
            {passwordValue.trialIsVisible ? (
              <BiShow style={{ color: "#142A40" }} />
            ) : (
              <BiHide style={{ color: "#ccc" }} />
            )}
          </button>
        </div>
        <section>
          <p>Already have an account?</p>
          <button type="Submit" className={classes.submit}>
            Register
          </button>
        </section>
      </form>
    </div>
  );
};

export default Form;
