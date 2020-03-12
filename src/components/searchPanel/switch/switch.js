import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

export default function({ handleSwitchChange, label, checked }) {
  return (
    <FormControlLabel
      control={
        <Switch
          onChange={handleSwitchChange}
          value="checkedB"
          color="primary"
          checked={checked}
        />
      }
      label={label}
    />
  )
}