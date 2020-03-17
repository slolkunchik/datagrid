import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import useStyles from './queryStringExample-styles'

export default function QueryStringExample() {
  const classes = useStyles()

  return (
    <Button
      className={classes.queryButton}
      variant="contained"
      color="primary"
      component={Link}
      to={"/?enum=L,XS&text=adol"}
    >
      Example of a query string
    </Button>
  )
}
