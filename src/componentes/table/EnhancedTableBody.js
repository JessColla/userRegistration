import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./style.css";

function EnhancedTableBody(props) {
  return (
    <TableBody className="tableBody">
      {props
        .stableSort(
          props.users,
          props.getComparator(props.order, props.orderBy)
        )
        .slice(
          props.page * props.rowsPerPage,
          props.page * props.rowsPerPage + props.rowsPerPage
        )
        .map((user, index) => {
          const isItemSelected = props.isSelected(user.name);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event) => props.handleClick(event, user.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={user.name}
              selected={isItemSelected}
            >
              <TableCell align="left">{user.id}</TableCell>

              <TableCell id={labelId} scope="user" padding="none">
                {user.name}
              </TableCell>
              <TableCell align="left">{user.status}</TableCell>
              <TableCell align="right">
                <IconButton
                  color="primary"
                  className="botaoChevronRightIcon"
                  onClick={() => props.handleOpen(user)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  className="botaoChevronRightIcon"
                  onClick={() => props.handleAlertOpen(user.id)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
}

export default EnhancedTableBody;
