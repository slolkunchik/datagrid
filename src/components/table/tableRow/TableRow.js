import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import useStyles from './tableRow-styles'
import clsx from 'clsx'

export default function TableRow({onSelectRow, selectedRows, isVirtualizationOn, style, student}) {
  const classes = useStyles()

  const isSelected = id => selectedRows.indexOf(id) !== -1
  const isItemSelected = isSelected(student.id)

  return (
    <div
      style={isVirtualizationOn ? style : {}}
      className={clsx(classes.tableRow, {
        [classes.selected]: isItemSelected,
      })}
      onClick={event => onSelectRow(event, student.id)}
    >
      <div className={clsx(classes.tableCell, classes.checkbox)}><Checkbox checked={isItemSelected}/></div>
      <div className={clsx(classes.tableCell, classes.id)}>{student.id}</div>
      <div className={clsx(classes.tableCell, classes.name)}>{student.name}</div>
      <div className={classes.tableCell}><p className={classes.email}>{student.email}</p></div>
      <div className={clsx(classes.tableCell, classes.date)}>{student.changeDate.toDateString('en-US')}</div>
      <div className={clsx(classes.tableCell, classes.score)}>{student.score.toLocaleString('en-US')}</div>
      <div className={clsx(classes.tableCell, classes.size)}>{student.size.value}</div>
      <div className={clsx(classes.tableCell, classes.married)}>{student.isMarried ? 'Yes' : 'No'}</div>
    </div>
)
}
