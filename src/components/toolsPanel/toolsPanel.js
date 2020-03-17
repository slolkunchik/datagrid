import React from 'react'
import useStyles from './toolsPanel-styles'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Select from './select/select'
import Switch from './switch/switch'
import Checkboxes from './checkboxes/checkboxes'
import PropTypes from 'prop-types'

export default function ToolsPanel({
                           handleSearchChange,
                           handleSelectChange,
                           handleSwitchChange,
                           value,
                           isVirtualizationOn,
                           handleIsVirtualizationCheck,
                           columns,
                           selectValue,
                           isMarriedChecked
                         }) {
  const classes = useStyles()

  return (
    <>
      <section className={classes.root}>
        <h4 className={classes.title}>Filter options</h4>
        <div className={classes.form}>
          <Paper component="form" className={classes.searchBox}>
            <InputBase
              value={value}
              className={classes.input}
              placeholder="Search by name, email, score fields"
              inputProps={{'aria-label': 'search field'}}
              onChange={handleSearchChange}
            />
            <SearchIcon className={classes.icon}/>
          </Paper>
          <Select selectValue={selectValue} onChange={handleSelectChange}/>
          <Switch
            handleSwitchChange={handleSwitchChange}
            label="married"
            checked={isMarriedChecked}
            title="sort by married status"/>
          <Switch
            handleSwitchChange={(event) => handleIsVirtualizationCheck(event)}
            label={isVirtualizationOn ? 'Virt. ON' : 'Virt. OFF'}
            checked={isVirtualizationOn}
            title="switch virtualization"/>
        </div>
      </section>
      <section className={classes.root}>
        <Checkboxes columns={columns} />
      </section>
    </>
  )
}

ToolsPanel.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleSwitchChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isVirtualizationOn: PropTypes.bool.isRequired,
  handleIsVirtualizationCheck: PropTypes.func.isRequired,
  columns: PropTypes.shape({
    isEmailOn: PropTypes.bool,
    isChangeDateOn: PropTypes.bool,
    isScoreOn: PropTypes.bool,
    isSizeOn: PropTypes.bool,
    isMarriedOn: PropTypes.bool,
    handleChange: PropTypes.func,
  }).isRequired,
  selectValue: PropTypes.arrayOf(PropTypes.string),
  isMarriedChecked: PropTypes.bool.isRequired,
}