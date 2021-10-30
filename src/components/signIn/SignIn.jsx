import React, { useContext, useState } from "react";
import "components/signIn/SignIn.css";
import { AuthContext } from "lib/contexts";
import { CREDENTIALS } from "lib/constants";

export default function SignIn() {
  const [credentials, setCredentials] = useState({});
  const { setIsSignedIn } = useContext(AuthContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = credentials;
    if (email === CREDENTIALS.EMAIL && password === CREDENTIALS.PASSWORD) {
      localStorage.setItem("auth", "true");
      setIsSignedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <div className="signin-box__title">Welcome back!</div>
        <form onSubmit={handleSubmit}>
          <input
            className="sign-box__input"
            type="email"
            name="email"
            value={credentials.email || ""}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            className="sign-box__input"
            type="password"
            name="password"
            value={credentials.password || ""}
            onChange={handleChange}
            placeholder="Password"
            required
          />

          <button className="sign-box__submit" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
