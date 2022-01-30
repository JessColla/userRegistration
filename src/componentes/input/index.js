import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

function Input(props) {
  return (
    <FormControl fullWidth variant="outlined" className="formControl">
      <TextField
        fullWidth
        id={props.idInput}
        label={props.label}
        type={props.type}
        autoComplete="current-name"
        variant="outlined"
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
    </FormControl>
  );
}

export default Input;
