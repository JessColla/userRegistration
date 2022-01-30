import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Button from "../button";
import RegistrationForm from "../registrationForm";
import Title from "../title";

import { httpclient } from "../../services/httpclient";

import "./style.css";

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

export default function ModalUserDetails({ userEdit, ...props }) {
  const initialValues = {
    email: userEdit?.email ?? "",
    nome: userEdit?.name ?? "",
    genero: userEdit?.gender ?? "",
    status: userEdit?.status ?? "",
  };

  const userID = userEdit?.id;
  const [values, setValues] = React.useState(initialValues);

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
      .patch(`/v1/users/${userID}`, body)
      .then(() => {
        props.refreshUsers();
      })
      .catch((erro) => {
        console.log("erro handleRemoveUser", erro);
      });
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="pagCadastro">
            <Title className="containertexto" title="Detalhes do Usuário" />

            <RegistrationForm
              nome={values.nome}
              email={values.email}
              status={values.status}
              genero={values.genero}
              StatusLista={StatusLista}
              GeneroList={GeneroList}
              handleOnChange={handleOnChange}
            />

            <div>
              <Button
                button="Cancelar"
                className="cancelar"
                onClick={props.handleClose}
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
