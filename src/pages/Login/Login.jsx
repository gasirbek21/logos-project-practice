import axios from "../../utils/axios";
import React, { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { CustomContext } from "../../utils/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(true);
  const [status, setStatus] = useState(false);
  const { setUser } = useContext(CustomContext);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    let newUser = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    axios
      .post("/login", newUser)
      .then(({ data }) => {
        setUser({
          token: data.accessToken,
          ...data.user,
        });
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: data.accessToken,
            ...data.user,
          })
        );
        navigate("/");
        alert("Login successful");
      })
      .then()
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <form className="form" onSubmit={loginUser}>
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
          <button type="submit" className="form-btn btn">
            ВОЙТИ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
