import Zoom from "@mui/material/Zoom";
import styles from "./log.module.css";
import "./log.module.css";

export default function Log(props) {
  return (
    <div className={props.style?"log-reg-mini-page":styles["log-mini-page"]}>
      <Zoom in={props.zoomBack}>
        <button onClick={props.back} className={props.style?"buttonBack":styles["buttonBack"]}>
          Go Back
        </button>
      </Zoom>
      <form className= {props.style?"log-reg-form":styles["log-form"]} onSubmit={props.logData}>
        <input
          type="email"
          className={`reg-input ${props.emailValid ? "" : styles.valid}`}
          name="email"
          onChange={props.onChange}
          autoComplete="username"
          placeholder="Email"
        />
        <input
          type="password"
          className={`log-input ${props.passwordValid ? "" : styles.valid}`}
          name="password"
          onChange={props.onChange}
          autoComplete="new-password"
          placeholder="Password"
        />
        {props.error}
        <button>Log In</button>
      </form>
    </div>
  );
}
