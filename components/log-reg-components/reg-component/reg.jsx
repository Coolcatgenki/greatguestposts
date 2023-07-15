import Zoom from "@mui/material/Zoom";
import styles from "./reg.module.css";
import "./reg.module.css";

export default function RegistrationForm(props) {
  return (
    <>
      <div className="log-reg-mini-page">
        <Zoom in={props.zoomBack}>
          <button onClick={props.back} className="buttonBack">
            Go Back
          </button>
        </Zoom>
        <form className="log-reg-form" onSubmit={props.registerData}>
          <input
            type="email"
            className={`reg-input ${props.emailValid ? "" : styles.valid}`}
            name="email"
            onChange={props.onChange}
            placeholder="Email"
          />
          <input
            className={`reg-input ${props.usernameValid ? "" : styles.valid}`}
            name="username"
            onChange={props.onChange}
            autoComplete="username"
            placeholder="Username"
          />
          <input
            type="password"
            className={`reg-input ${props.passwordValid ? "" : styles.valid}`}
            name="password"
            onChange={props.onChange}
            autoComplete="new-password"
            placeholder="Password"
          />
          <input
            type="password"
            className={`reg-input ${props.passwordValid ? "" : styles.valid}`}
            name="confirmPassword"
            onChange={props.onChange}
            autoComplete="new-password"
            placeholder="Confirm Password"
          />
          <button>Register</button>
        </form>
      </div>
    </>
  );
}
