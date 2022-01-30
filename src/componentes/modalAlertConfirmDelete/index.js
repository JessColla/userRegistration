import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Title from "../title";
import Button from "../button";

import "./style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 330,
  height: 230,
  borderRadius: 3,
  bgcolor: "background.paper",
  boxShadow: 29,
  p: 4,
};

export default function ModalAlertConfirmDelete(props) {
  return (
    <div>
      <Modal
        open={props.modalAlertOpen}
        onClose={props.handleAlertClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Title className="containertexto" title="Excluir usuário" />
            <div style={{ marginTop: 30 }}>
              <p>Você tem certeza que deseja excluir este usuário?</p>
              <Button
                className="cancelar"
                onClick={props.handleAlertClose}
                button="Não"
              />
              <Button
                className="salvar"
                button="Sim"
                onClick={props.handleRemoveUser}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
