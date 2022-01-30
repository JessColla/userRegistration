import * as React from "react";
import Input from "../input";
import InputSelectOptions from "../inputSelectOptions";

function RegistrationForm(props) {
  return (
    <div>
      <Input
        id="nome"
        label="Nome"
        type="text"
        value={props.nome}
        onChange={props.handleOnChange}
        name="nome"
      />
      <Input
        id="email"
        label="E-mail"
        type="email"
        value={props.email}
        onChange={props.handleOnChange}
        name="email"
      />

      <InputSelectOptions
        id="id-genero"
        idSelect="idSelectGenero"
        inputLabel="Genero"
        listaOpcoes={props.GeneroList}
        value={props.genero}
        onChange={props.handleOnChange}
        name="genero"
        label="genero"
      />
      <InputSelectOptions
        id="id-status"
        idSelect="idSelectStatus"
        inputLabel="Status"
        listaOpcoes={props.StatusLista}
        value={props.status}
        onChange={props.handleOnChange}
        name="status"
        label="status"
      />
    </div>
  );
}

export default RegistrationForm;
