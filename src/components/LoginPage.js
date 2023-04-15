import React from "react";
import "./LoginPage.css";

const LoginPage = (props) => {
  const { onLogin } = props;
  const loginHandler = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    onLogin(username, password);
  };

  return (
    <div className="container">
      <form onSubmit={loginHandler} className="login-page">
        <div className="login-page__controls">
          <div className="login-page__control">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="login-page__control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit" disabled={props.isDisabled}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
