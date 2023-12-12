import React, { useRef, useState } from "react";
import { checkAuth } from "../../api/auth";
import s from "./RegisterForm.module.css";
import ReactDOM from "react-dom";

const RegisterForm = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [result, setResult] = useState("");

  // const loginInput = useRef<HTMLInputElement>(null);
  // const passInput = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (pass && login) {
      console.log(login, pass);
      if (login.match(/\s/) || pass.match(/\s/))
        setResult("Данные не корректны");
      else {
        const result = checkAuth({ login, pass });
        setResult(result);
      }
    }
    // const login = loginInput?.current?.value
    // const pass = passInput?.current?.value
    // if (pass && login) {
    //   const result = checkAuth({ login, pass });
    //   console.log(result);
    // }
  };
  return (
    <>
      <h2>Форма регистрации</h2>
      <form onSubmit={handleSubmit} className={s.container}>
        <label>
          <p>Логин</p>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          {/* <input type="text" ref={loginInput} /> */}
        </label>
        <label>
          <p>Пароль</p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {/* <input type="password" ref={passInput} /> */}
        </label>
        <button type="submit">Войти</button>
        <button onClick={(e) => e.preventDefault()}>Зарегистрироваться</button>

        {result &&
          ReactDOM.createPortal(
            <div className={s.modal_wrapper}>
              <div className={s.modal}>
                <p>{result}</p>
                <button
                  onClick={() => {
                    setResult("");
                  }}
                >
                  close
                </button>
              </div>
            </div>,
            document.getElementById("modal") as HTMLElement
          )}
      </form>
    </>
  );
};

export default RegisterForm;
