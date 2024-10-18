import { useState } from "react";

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
  const [userData] = useState([
    { name: "", email: "", password: "" },
    { name: "", password: "" },
  ]);
  const [currentUserData, setCurrentUSer] = useState(
    log === "REG" ? userData[0] : userData[1]
  );

  const registerFormDetail = async () => {
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
    console.log(response);
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
    }
  };

  const loginFormDetail = async () => {
    console.log("data");
  };

  const submitDetails = (event) => {
    event.preventDefault();
    console.log(currentUserData, log);
    log === "REG" ? registerFormDetail() : loginFormDetail();
  };

  const setRegister = () => {
    setLog("REG");
    setCurrentUSer(userData[0]);
  };

  const setLogin = () => {
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
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
