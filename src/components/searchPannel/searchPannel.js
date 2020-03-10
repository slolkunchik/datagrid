import React from 'react'
import useStyles from './seachPannel-styles'
import SearchIcon from '@material-ui/icons/Search'
import { Grid, Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'

export default function({ onChange, value }) {
  const classes = useStyles()

  return (
    <Grid item container justify="space-around" alignItems="center">
      <Box ml={1} mb={1}>
        <h1 className={classes.h1}>
          Datagrid project
        </h1>
      </Box>
      <Grid item md={3} sm={5} xs={12}>
        <Box mx={1} mb={1}>
          <Paper component="form" className={classes.root}>
            <InputBase
              value = {value}
              className={classes.input}
              placeholder="Search by name, email, score fields"
              inputProps={{ 'aria-label': 'search field' }}
              onChange={onChange}
            />
            <SearchIcon className={classes.icon}/>
          </Paper>
        </Box>
      </Grid>
    </Grid>

  )
}