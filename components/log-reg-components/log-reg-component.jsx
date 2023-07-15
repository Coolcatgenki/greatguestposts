import LogComponent from "./log-component/log";
import RegComponent from "./reg-component/reg";


export default function LogRegComponent(props){
    if (props.whatMiniForm === "log") {
        return (
          <LogComponent
            style= {props.style}
            back={props.back}
            onChange={props.logChange}
            logData={props.logData}
            zoomBack={props.zoomBack}
            emailValid={props.emailValid}
            passwordValid={props.passwordValid}
          />
        );
      } else if (props.whatMiniForm === "reg") {
        return (
          <RegComponent
            back={props.back}
            onChange={props.regChange}
            registerData={props.registerData}
            zoomBack={props.zoomBack}
            usernameValid={props.usernameValid}
            passwordValid={props.passwordValid}
            emailValid={props.emailValid}
          />
        );
    }
}