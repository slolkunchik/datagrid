import React from 'react'
import useStyles from './seachPannel-styles'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Select from './select/select'
import Switch from './switch/switch'

export default function({ handleSearchChange, handleSelectChange, handleSwitchChange, value }) {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <h4 className={classes.title}>Filter settings</h4>
      <div className={classes.form}>
        <Paper component="form" className={classes.searchBox}>
          <InputBase
            value = {value}
            className={classes.input}
            placeholder="Search by name, email, score fields"
            inputProps={{ 'aria-label': 'search field' }}
            onChange={handleSearchChange}
          />
          <SearchIcon className={classes.icon}/>
        </Paper>
        <Select onChange={handleSelectChange} />
        <Switch handleSwitchChange={handleSwitchChange}/>
      </div>
    </section>
  )
}