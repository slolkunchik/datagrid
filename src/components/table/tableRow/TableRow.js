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
      <div className={clsx(classes.tableCell, classes.checkbox, {
        [classes.selected]: isItemSelected,
      })}><Checkbox checked={isItemSelected}/></div>
      <div className={clsx(classes.tableCell, classes.id, {
        [classes.selected]: isItemSelected,
      })}><p>{student.id}</p></div>
      <div className={clsx(classes.tableCell, classes.name, {
        [classes.selected]: isItemSelected,
      })}><p>{student.name}</p></div>
      <div className={clsx(classes.tableCell, {
        [classes.selected]: isItemSelected,
      })}><p className={classes.email}>{student.email}</p></div>
      <div className={clsx(classes.tableCell, classes.date, {
        [classes.selected]: isItemSelected,
      })}><p>{student.changeDate.toDateString('en-US')}</p></div>
      <div className={clsx(classes.tableCell, classes.score, {
        [classes.selected]: isItemSelected,
      })}><p>{student.score.toLocaleString('en-US')}</p></div>
      <div className={clsx(classes.tableCell, classes.size, {
        [classes.selected]: isItemSelected,
      })}><p>{student.size.value}</p></div>
      <div className={clsx(classes.tableCell, classes.married, {
        [classes.selected]: isItemSelected,
      })}><p>{student.isMarried ? 'Yes' : 'No'}</p></div>
    </div>
)
}
