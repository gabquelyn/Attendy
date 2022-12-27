import classes from "./Form.module.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import image from "../assets/25.png";
import { useState } from "react";
import { BsKeyFill} from "react-icons/bs";
const Form = () => {
  const [passwordValue, setPasswordValue] = useState({
    firstTrial: "",
    firstTrialIsVisible: false,
    secondTrial: "",
    secondTrialIsVisible: false,
  });

  const firstPasswordHandler = (event) => {
    setPasswordValue((prevState) => ({
      ...prevState,
      firstTrial: event.target.value,
    }));
  };

  const secondPasswordHandler = (event) => {
    setPasswordValue((prevState) => ({
      ...prevState,
      secondTrial: event.target.value,
    }));
  };

  const firstVisibleHandler = (event) => {
    event.preventDefault();
    setPasswordValue((prevState) => ({
      ...prevState,
      firstTrialIsVisible: !prevState.firstTrialIsVisible,
    }));
  };

  const secondVisibleHandler = (event) => {
    event.preventDefault();
    setPasswordValue((prevState) => ({
      ...prevState,
      secondTrialIsVisible: !prevState.secondTrialIsVisible,
    }));
  };

  return (
    <div className={classes.form}>
      <div className={classes.image}>
        <img src={image} alt="welcome" />
      </div>
      <form autoComplete="off">
        <div>
          <MdEmail style={{ color: "#142A40", fontSize: "14px" }} />
          <input id="email" type="email" placeholder="Your Email" />
        </div>
        <div>
          <RiLockPasswordFill style={{ color: "#142A40", fontSize: "14px" }} />
          <input
            id="password"
            value={passwordValue.firstTrial}
            type={passwordValue.firstTrialIsVisible ? "text" : "password"}
            placeholder="password"
            onChange={firstPasswordHandler}
          />
          <button className={classes.eyes} onClick={firstVisibleHandler}>
            {passwordValue.firstTrialIsVisible ? (
              <BiShow style={{ color: "#142A40" }} />
            ) : (
              <BiHide style={{ color: "#ccc" }} />
            )}
          </button>
        </div>
        <div>
          <RiLockPasswordLine style={{ color: "#142A40", fontSize: "14px" }} />
          <input
            id="repeat password"
            value={passwordValue.secondTrial}
            type={passwordValue.secondTrialIsVisible ? "text" : "password"}
            placeholder="Repeat your password"
            onChange={secondPasswordHandler}
          />
          <button className={classes.eyes} onClick={secondVisibleHandler}>
            {passwordValue.secondTrialIsVisible ? (
              <BiShow style={{ color: "#142A40" }} />
            ) : (
              <BiHide style={{ color: "#ccc" }} />
            )}
          </button>
        </div>
        <section>
          <p>Already have an account?</p>
          <button type="Submit" className={classes.submit}>
            <BsKeyFill style={{ fontSize: "18px" }} />
          </button>
        </section>
      </form>
    </div>
  );
};

export default Form;
