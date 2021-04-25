import userEvent from "@testing-library/user-event";
import { useEffect, useRef } from "react";
import React from "react";
import "./Login.css";
import Heading from "./components/Heading";

const Login = ({
  email,
  password,
  errorpassword,
  erroremail,
  sethasaccount,
  hasaccount,
  handleSignup,
  setemail,
  setpassword,
  handleLogin,
}) => {
  return (
    <section id="home-login">
      {/* <Heading/> */}
      <div class="container-login login">
        <div class="box-login">
          {hasaccount ? <h1>LOGIN</h1> : <h1>REGISTER</h1>}
          <input
            type="text"
            name=""
            placeholder="Email-Id"
            autoFocus
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <p className="errorMsg">{erroremail}</p>
          <input
            type="password"
            name=""
            placeholder="Type your password here"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <p className="errorMsg">{errorpassword}</p>
          <div>
            {hasaccount ? (
              <>
  <div className="neon">
                  <span onClick={handleLogin} >Sign in</span>
                </div>
                <p className="buttonpara">
                  don't have an account{" "}
                  <span onClick={() => sethasaccount(!hasaccount)}>
                    &nbsp;Sign Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <div className="neon">
                  <span onClick={handleSignup} style={{cursor:"pointer"}} >sign up</span>
                </div>

                <p className="buttonpara" style={{cursor:"pointer"}}>
                  already have an account{" "}
                  <span onClick={() => sethasaccount(!hasaccount)} style={{cursor:"pointer"}}>
                    &nbsp;Sign In
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
