import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(true);
  const [status, setStatus] = useState(false);

  return (
    <div className="login">
      <form className="form">
        <h2 className="form-title">Вход на LOGOS</h2>
        <div className="form-act">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-field"
            placeholder="Email"
            required
          />
          <div className="form-password">
            <input
              type={eye ? "password" : "text"}
              className="form-field"
              placeholder="Придумай пароль"
            />
            <span onClick={() => setEye((prev) => !prev)} className="form-eye">
              {eye ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
          <div className="form-subtitle">
            <Link to="/register">Создать аккаунт</Link>
          </div>
          <div
            className="form-btn btn"
            onClick={() => setStatus((prev) => !prev)}>
            ВОЙТИ
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
