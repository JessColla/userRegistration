import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function InputSelectOptions(props) {
  const options = props.listaOpcoes || [];
  return (
    <FormControl
      fullWidth
      variant="outlined"
      sx={{ minWidth: 300 }}
      className="formControl"
    >
      <InputLabel id={props.id}>{props.inputLabel}</InputLabel>
      <Select
        labelId={props.id}
        id={props.idSelect}
        value={props.value}
        label={props.label}
        name={props.name}
        onChange={props.onChange}
      >
        {options.map((item) => (
          <MenuItem value={item.id}>{item.title}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default InputSelectOptions;
