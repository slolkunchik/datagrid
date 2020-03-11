import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import useStyles from './tableBody-styles'
import TableBody from "@material-ui/core/TableBody";

function CustomTableBody({students}) {
  const classes = useStyles()
  return (
    <TableBody>
      {students.map(row => (
        <TableRow key={`row-${row.id}`} row={row}>
          <TableCell align="center"><Checkbox /></TableCell>
          <TableCell align="center">{row.id}</TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center" className={classes.email}>{row.email}</TableCell>
          <TableCell align="center">{row.changeDate.toDateString('en-US')}</TableCell>
          <TableCell align="right">{row.score.toLocaleString('en-US')}</TableCell>
          <TableCell align="center">{row.size.value}</TableCell>
          <TableCell align="center">{row.isMarried ? 'Yes' : 'No'}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default React.memo(
  CustomTableBody,
  (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b)
  }
);
