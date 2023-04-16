import React, { useState } from "react";

import MainPage from "./components/MainPage.js";
import LoginPage from "./components/LoginPage.js";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useState("");

  const loginHandler = (user, password) => {
    if (password === "BAU_Azure_7756") {
      setLoggedIn(true);
      setUser(user);
    } else {
      console.log("Wrong password");
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }
      , 3000);
    }
  };

  return (
    <div>
      <header>
        {loggedIn ? (
          <MainPage user={user} />
        ) : (
          <LoginPage onLogin={loginHandler} isDisabled={disabled} />
        )}
      </header>
    </div>
  );
};

export default App;
