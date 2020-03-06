import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import useStyles from './tableHead-styles'
import SortIcon from '@material-ui/icons/Sort'
import headerData from "../../../data/tableHeaderData"

export default function StickyTableHead() {
  const classes = useStyles()

  return (
    <TableHead>
      <TableRow>
        {headerData.map((el, index) =>
          <TableCell className={classes.tableHeader} align="center" key={`headerName-${index}`}>
            {el.body}
            { el.isSorted ? <SortIcon fontSize="small" className={classes.sortedIcon}/> : null }
          </TableCell>)
        }
      </TableRow>
    </TableHead>
  );
}
