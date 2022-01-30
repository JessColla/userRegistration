import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Button from "../button";
import RegistrationForm from "../registrationForm";
import Title from "../title";

import "./style.css";

import { httpclient } from "../../services/httpclient";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  borderRadius: 3,
  bgcolor: "background.paper",
  boxShadow: 29,
  p: 4,
};

const initialValues = {
  email: "",
  nome: "",
  genero: "",
  status: "",
};

const GeneroList = [
  {
    id: "female",
    title: "Feminino",
  },
  {
    id: "male",
    title: "Masculino",
  },
];

const StatusLista = [
  {
    id: "active",
    title: "Ativo",
  },
  {
    id: "inactive",
    title: "Inativo",
  },
];

export default function ModalAddUser(props) {
  const [values, setValues] = React.useState({ ...initialValues });

  const handleOnChange = (e, selected) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSaveUser = (e) => {
    e.preventDefault();

    const body = {
      email: values.email,
      name: values.nome,
      gender: values.genero,
      status: values.status,
    };

    httpclient
      .post(`/v1/users`, body)
      .then(() => {
        setValues(initialValues);

        props.refreshUsers();
      })
      .catch((erro) => {
        console.log("erro handleRemoveUser", erro);
      });

    props.handleCadastroClose();
  };

  return (
    <div>
      <Modal
        open={props.modalCadastroOpen}
        onClose={props.handleCadastroClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Title className="containertexto" title="Adicionar Usuário" />

            <RegistrationForm
              nome={values.nome}
              handleOnChange={handleOnChange}
              email={values.email}
              GeneroList={GeneroList}
              genero={values.genero}
              StatusLista={StatusLista}
              status={values.status}
            />

            <div style={{ marginTop: 30 }}>
              <Button
                button="Cancelar"
                className="cancelar"
                onClick={props.handleCadastroClose}
              />
              <Button
                button="Salvar"
                className="salvar"
                onClick={handleSaveUser}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
