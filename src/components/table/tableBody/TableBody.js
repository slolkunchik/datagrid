import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import useStyles from './tableBody-styles'
import clsx from 'clsx'

export default function CustomTableBody({students, onSelectRow, selectedRows}) {
  const classes = useStyles()
  const isSelected = id => selectedRows.indexOf(id) !== -1

  return (
    <>
      {students.map(row => {
        const isItemSelected = isSelected(row.id)
        return <div
            className={classes.tableRow}
            key={`row-${row.id}`}
            onClick={event => onSelectRow(event, row.id)}
          >
          <div className={clsx(classes.tableCell, classes.checkbox)}><Checkbox checked={isItemSelected}/></div>
          <div className={clsx(classes.tableCell, classes.id)}>{row.id}</div>
          <div className={clsx(classes.tableCell, classes.name)}>{row.name}</div>
          <div className={classes.tableCell}><p className={classes.email}>{row.email}</p></div>
          <div className={clsx(classes.tableCell, classes.date)}>{row.changeDate.toDateString('en-US')}</div>
          <div className={clsx(classes.tableCell, classes.score)}>{row.score.toLocaleString('en-US')}</div>
          <div className={clsx(classes.tableCell, classes.size)}>{row.size.value}</div>
          <div className={clsx(classes.tableCell, classes.married)}>{row.isMarried ? 'Yes' : 'No'}</div>
          </div>
      })}
    </>
  )
}
