import { useState } from "react";
import { Oval } from "react-loader-spinner";

import "./index.css";

const Email = (props) => {
  const { changeData, val } = props;
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={val}
        onChange={(event) => changeData(event)}
      />
    </>
  );
};

const Login = () => {
  const [log, setLog] = useState("REG");
  const [apiStatus, setApi] = useState(false);
  const [userData] = useState([
    { name: "", email: "", password: "" },
    { name: "", password: "" },
  ]);
  const [currentUserData, setCurrentUSer] = useState(
    log === "REG" ? userData[0] : userData[1]
  );

  const registerFormDetail = async () => {
    setApi(true);
    let userData = {
      name: currentUserData.name,
      email: currentUserData.email,
      password: currentUserData.password,
    };
    const url = "https://stream-log-auth.onrender.com/sign";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      console.log(response);
      setApi(false);
    } else {
      setApi(false);
    }
  };

  const loginFormDetail = async () => {
    setApi(true);

    let userData = {
      username: currentUserData.name,
      password: currentUserData.password,
    };
    const url = "https://stream-log-auth.onrender.com/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      console.log(response);
      setApi(false);
    } else {
      setApi(false);
    }
  };

  const submitDetails = (event) => {
    event.preventDefault();
    console.log(currentUserData, log);
    log === "REG" ? registerFormDetail() : loginFormDetail();
  };

  const setRegister = () => {
    setApi(false);
    setLog("REG");
    setCurrentUSer(userData[0]);
  };

  const setLogin = () => {
    setApi(false);
    setLog("LOG");
    setCurrentUSer(userData[1]);
  };

  const onChangeMail = (event) => {
    setCurrentUSer({ ...currentUserData, email: event.target.value });
  };

  const onChangeUsername = (event) => {
    setCurrentUSer({ ...currentUserData, name: event.target.value });
  };

  const onChangeUserPass = (event) => {
    setCurrentUSer({ ...currentUserData, password: event.target.value });
  };

  return (
    <div className="login-section-container">
      <div className="login-preview">s</div>
      <div className="login-form">
        <div className="login-form-btn">
          <button className="btn-sign" onClick={setRegister}>
            Register
          </button>
          <button className="btn-login" onClick={setLogin}>
            Login
          </button>
        </div>
        <div className="login-content">
          <form className="form-container" onSubmit={submitDetails}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={onChangeUsername}
              value={currentUserData.name}
            />

            {log === "REG" && (
              <Email changeData={onChangeMail} val={currentUserData.email} />
            )}

            <label htmlFor="pass">Password</label>
            <input
              type="text"
              id="pass"
              onChange={onChangeUserPass}
              value={currentUserData.password}
            />
            <button type="submit" className="sub-btn" onClick={submitDetails}>
              {apiStatus ? (
                <Oval
                  visible={true}
                  height="30"
                  width="30"
                  color="white"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
