import React from "react";

import Table from "../../componentes/table";
import "../ListaUsuarios/style.css";
import ModalUserDetails from "../../componentes/modalUserDetails";
import ModalAlertConfirmDelete from "../../componentes/modalAlertConfirmDelete";
import ModalAddUser from "../../componentes/modalAddUser";
import Button from "../../componentes/button";

import { httpclient } from "../../services/httpclient";

import Logo from "../../img/cargon.png";

function ListaUsuarios() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [modalAlertOpen, setModalAlertOpen] = React.useState(false);
  const [modalCadastroOpen, setModalCadastroOpen] = React.useState(false);
  const [idUser, setIdUser] = React.useState("");
  const [userEdit, setUserEdit] = React.useState({});
  const [users, setUsers] = React.useState([]);

  const loadingUsers = () => {
    httpclient
      .get("/v1/users?page=" + page)
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((erro) => {
        console.log("erro", erro);
      });
  };

  const handleOpen = (user) => {
    setOpen(true);
    setUserEdit(user);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlertOpen = (user) => {
    setIdUser(user);

    setModalAlertOpen(true);
  };

  const handleAlertClose = () => {
    setModalAlertOpen(false);
  };

  const handleCadastroOpen = () => {
    setModalCadastroOpen(true);
  };

  const handleCadastroClose = () => {
    setModalCadastroOpen(false);
  };

  const handleRemoveUser = () => {
    httpclient
      .delete(`/v1/users/${idUser}`)
      .then(() => {
        loadingUsers();
      })
      .catch((erro) => {
        console.log("erro handleRemoveUser", erro);
      });
    setModalAlertOpen(false);
  };

  const handleRefreshUsers = () => {
    loadingUsers();
    handleClose();
  };

  React.useEffect(() => {
    loadingUsers();
  }, [page]);

  return (
    <>
      <div className="cardListaUsuarios">
        <img src={Logo} alt="logo" className="img" />

        <div className="container">
          <div className="containercabecalho">
            <h2 className="containertexto">Lista de Usuários</h2>
            <Button
              className="containerbutton"
              onClick={handleCadastroOpen}
              button="Adicionar Usuário"
            />
          </div>
          <Table
            handleOpen={handleOpen}
            handleAlertOpen={handleAlertOpen}
            page={page}
            setPage={setPage}
            users={users}
          />
        </div>
      </div>

      {open && (
        <ModalUserDetails
          handleClose={handleClose}
          refreshUsers={handleRefreshUsers}
          open={open}
          userEdit={userEdit}
        />
      )}

      <ModalAlertConfirmDelete
        handleAlertClose={handleAlertClose}
        modalAlertOpen={modalAlertOpen}
        handleRemoveUser={handleRemoveUser}
      />

      <ModalAddUser
        handleCadastroClose={handleCadastroClose}
        modalCadastroOpen={modalCadastroOpen}
        refreshUsers={handleRefreshUsers}
      />
    </>
  );
}

export default ListaUsuarios;
