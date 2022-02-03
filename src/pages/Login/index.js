import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../componentes/input";
import "./style.css";
import Button from "../../componentes/button";
import Title from "../../componentes/title";

const initialValues = {
  email: "adim@gmail.com",
  password: "1234",
};

function Login() {
  const history = useHistory();

  const [values, setValues] = useState(initialValues);
  const [dadosInvalidos, setDadosInvalidos] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSaveUser = (e) => {
    e.preventDefault();

    if (values.email === "adim@gmail.com" && values.password === "1234") {
      history.push("/lista-usuarios");
      setDadosInvalidos(false);
    } else {
      setDadosInvalidos(true);
    }
  };

  return (
    <div className="background">
      <div className="elemento-background">
        <div className="PagLoginBackground">
          <div className="pagLogin">
            <div className="btn">
              <Title title="Login" />
            </div>
            <div className="input">
              <Input
                id="email"
                label="Usuário"
                type="text"
                value={values.email}
                onChange={handleOnChange}
                name="email"
              />

              <Input
                id="senha"
                label="Senha"
                type="password"
                value={values.password}
                onChange={handleOnChange}
                name="password"
              />
              {dadosInvalidos && (
                <p className="message-error">Dados Invalidos</p>
              )}
            </div>

            <Button
              className="entrar"
              button="Entrar"
              onClick={handleSaveUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
