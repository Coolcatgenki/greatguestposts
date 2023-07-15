import { useState } from "react";
import Zoom from "@mui/material/Zoom";
import LogRegComponent from "../components/log-reg-components/log-reg-component";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const [zoomToInit, setZoomToInit] = useState(false);
  const [zoomLogReg, setZoomLogReg] = useState(false);
  const [logForm, setLogForm] = useState({ email: "", password: "" });
  const [regForm, setRegForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [formError, setFormError] = useState("");
  const [zoomBack, setZoomBack] = useState(true);
  const [logReg, setLogReg] = useState("");

  /*--------------------- Start invalidation color Set----------------*/

  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  /*--------------------- End invalidation color Set----------------*/

  const regFchange = (event) => {
    const { name, value } = event.target;
    setRegForm(function (prev) {
      return { ...prev, [name]: value };
    });
    switch (name) {
      case "email":
        setEmailValid(true);
        break;
      case "password":
        setPasswordValid(true);
        break;
      case "confirmPassword":
        setPasswordValid(true);
        break;
      case "username":
        setUsernameValid(true);
        break;
      default:
        console.log("Its not good");
    }
  };

  const RegPost = (event) => {
    const { email, username, password, confirmPassword } = regForm;

    if (email.trim() === "") {
      setEmailValid(false);
    }

    if (username.trim() === "") {
      setUsernameValid(false);
    }

    if (password.trim() === "" || confirmPassword.trim() === "") {
      setPasswordValid(false);
    }

    event.preventDefault();
    console.log(regForm);
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

  const clickBack = () => {
    setZoomLogReg(false);
    setEmailValid(true);
    setUsernameValid(true);
    setPasswordValid(true);
    setRegForm({
      email: "",
      username: "",
      password: "",
      confirmpassword: "",
    });
    setLogForm({ email: "", password: "" });
  };

  const clickRegLog = () => {
    setZoomToInit(true);
  };

  const clickLog = () => {
    setZoomLogReg(true);
    setLogReg("log");
  };

  const clickReg = () => {
    setZoomLogReg(true);
    setLogReg("reg");
  };

  return (
    <main>
      <section id="getstarted-section">
        <div className="real-getstarted">
          <div className="explanation-getstarted">
            {session == null ? (
              ""
            ) : (
              <button onClick={() => signOut()}>Sign Out</button>
            )}
            {session == null ? "" : <h1> {session.user.email}</h1>}
            <h1>Grow Your Organic Presence</h1>
            <p>
              As a link building company, we’ll build high-quality and natural
              backlinks for your brand to increase its organic traffic and SERP
              rankings.{" "}
            </p>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="rating_reviews brown">
                     <div className="image">
                      <img
                        decoding="async"
                        src="https://helpinhomework.org/assets/web/images/ggp.png"
                        alt=""
                        width="36px"
                        height="36px"
                      />
                      </div>
                      <p>GGP Reviews</p>
                      <h4>05 / 05</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div className="rating_reviews green">
                  <div className="image">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="https://helpinhomework.org/assets/web/images/trustpilot.png"
                        alt=""
                        width="36px"
                        height="36px"
                      />
                      </div>
                      <p>Trustpilot</p>
                      <h4>4.9 / 05</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div className="rating_reviews red">
                  <div className="image">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="https://helpinhomework.org/assets/web/images/sitejabber.png"
                        alt=""
                        width="36px"
                        height="36px"
                      />
                      </div>
                      <p>Sitejabber</p>
                      <h4>05 / 05</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div className="rating_reviews blue">
                    <div className="image">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="https://helpinhomework.org/assets/web/images/google-review.png"
                        alt=""
                        width="36px"
                        height="36px"
                      />
                    </div>
                      <p>Google Review</p>
                      <h4>4.9 / 05</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="real-log-div">
            <Zoom in={!zoomLogReg}>
              <div className="log-reg-div">
                <div className="reg-div">
                  <Zoom in={!zoomToInit}>
                    <button className="start-button" onClick={clickRegLog}>
                      GET STARTED
                    </button>
                  </Zoom>

                  <Zoom in={zoomToInit}>
                    <div className="log-reg-buttons">
                      <button className="start-button" onClick={clickLog}>
                        Log In
                      </button>
                      <button className="start-button" onClick={clickReg}>
                        Register
                      </button>
                    </div>
                  </Zoom>
                </div>
              </div>
            </Zoom>
            <Zoom in={zoomLogReg}>
              <div className="log-reg">
                <LogRegComponent
                  style={true}
                  logData={LogPost}
                  registerData={RegPost}
                  back={clickBack}
                  zoomBack={zoomBack}
                  logChange={logFChange}
                  regChange={regFchange}
                  whatMiniForm={logReg}
                  usernameValid={usernameValid}
                  passwordValid={passwordValid}
                  emailValid={emailValid}
                />
              </div>
            </Zoom>
          </div>
        </div>
      </section>
    </main>
  );
}
