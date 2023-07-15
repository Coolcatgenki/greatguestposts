import LogComponent from "../components/log-reg-components/log-component/log";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/router';

export default function singIn() {
  console.log(useRouter().query);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const { error } = useRouter().query;
  const [logForm, setLogForm] = useState({ email: "", password: "" });
  const zoomBack = false;

  const errors = {
    CredentialsSignin:
      'Sign in failed. Check the details you provided are correct.',
    default: 'Unable to sign in.',
  };
  
  const SignInError = (error) => {
    console.log(error?? "lol");
    const errorMessage = error && (errors[error] ?? errors.default);
    return errorMessage
  };

  const realError= SignInError(error);

  const LogPost = async (event) => {
    const { email, password } = logForm;
    if (email.trim() === "") {
      setEmailValid(false);
    }

    if (password.trim() === "") {
      setPasswordValid(false);
    }

    event.preventDefault();
    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/loged",
    });
  };
  const logFChange = (event) => {
    const { name, value } = event.target;
    setLogForm(function (prev) {
      return { ...prev, [name]: value };
    });
    switch (name) {
      case "email":
        setEmailValid(true);
        break;
      case "password":
        setPasswordValid(true);
        break;
      default:
        console.log("Its not good");
    }
  };

  return (
    <div className="log-mini-page">
    <LogComponent
      style= {false}
      logData={LogPost}
      zoomBack={zoomBack}
      onChange={logFChange}
      passwordValid={passwordValid}
      emailValid={emailValid}
      error= {realError}
    />
    </div>
  );
}
