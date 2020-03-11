import React from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from './deletePanel-styles'
import Toolbar from '@material-ui/core/Toolbar'
import clsx from 'clsx'

export default function ({selectedNumber, onDeleteClick}) {
  const classes = useStyles()

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: selectedNumber > 0,
      })}
    >
      <Typography className={classes.deleteTitle} color="inherit" variant="subtitle1">
        {selectedNumber} selected
      </Typography>
      <Tooltip title="Delete">
        <IconButton aria-label="delete" onClick={onDeleteClick}>
          <DeleteIcon/>
        </IconButton>
      </Tooltip>
    </Toolbar>
  )
}
