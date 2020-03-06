import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from './tableHead/TableHead';
import TableRow from './tableRow/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './table-styles'

export default function SimpleTable({ rows }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} stickyHeader aria-label="sticky table">
        <TableHead />
        <TableBody>
          {rows.map(row => (
            <TableRow key={`row-${row.id}`} row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
