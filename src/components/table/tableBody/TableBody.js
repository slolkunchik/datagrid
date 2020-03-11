import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import useStyles from './tableBody-styles'
import TableBody from '@material-ui/core/TableBody'

export default function CustomTableBody({students, onSelectRow, selectedRows}) {
  const classes = useStyles()
  const isSelected = id => selectedRows.indexOf(id) !== -1

  return (
    <TableBody>
      {students.map(row => {
        const isItemSelected = isSelected(row.id)
        return <TableRow
            hover
            key={`row-${row.id}`}
            row={row}
            selected={isItemSelected}
            onClick={event => onSelectRow(event, row.id)}
          >
          <TableCell align="center"><Checkbox checked={isItemSelected}/></TableCell>
          <TableCell align="center">{row.id}</TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center" className={classes.email}>{row.email}</TableCell>
          <TableCell align="center">{row.changeDate.toDateString('en-US')}</TableCell>
          <TableCell align="right">{row.score.toLocaleString('en-US')}</TableCell>
          <TableCell align="center">{row.size.value}</TableCell>
          <TableCell align="center">{row.isMarried ? 'Yes' : 'No'}</TableCell>
          </TableRow>
      })}
    </TableBody>
  );
}
