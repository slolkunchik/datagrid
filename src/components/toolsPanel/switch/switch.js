import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import PropTypes from 'prop-types'

export default function SwitchComponent({ handleSwitchChange, label, checked }) {
  return (
    <FormControlLabel
      control={
        <Switch
          color="primary"
          onChange={handleSwitchChange}
          value=""
          checked={checked}
        />
      }
      label={label}
    />
  )
}

SwitchComponent.propTypes = {
  handleSwitchChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
}
