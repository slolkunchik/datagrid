import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import useStyles from './tableRow-styles'

export default function CustomTableRow({row}) {
  const classes = useStyles()

  return (
    <TableRow className={classes.root}>
      <TableCell align="center">
        <Checkbox />
      </TableCell>
      <TableCell align="right">{row.id}</TableCell>
      <TableCell align="center">{row.name}</TableCell>
      <TableCell align="center" className={classes.email}>{row.email}</TableCell>
      <TableCell align="center">{row.changeDate.toDateString('en-US')}</TableCell>
      <TableCell align="right">{row.score.toLocaleString('en-US')}</TableCell>
      <TableCell align="center">{row.size}</TableCell>
      <TableCell align="center">{row.isMarried ? 'Yes' : 'No'}</TableCell>
    </TableRow>
  );
}
