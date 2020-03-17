import React from 'react';
import useStyles from './checkboxes-styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import PropTypes from 'prop-types'

export default function Checkboxes({columns:{isEmailOn, isChangeDateOn, isScoreOn, isSizeOn, isMarriedOn, handleChange}}) {
  const classes = useStyles()

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Choose necessary columns</FormLabel>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox color="primary" checked={isEmailOn} onChange={handleChange('isEmailOn')} value="isEmailOn"/>}
          label="email"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isChangeDateOn} onChange={handleChange('isChangeDateOn')} value="isChangeDateOn"/>}
          label="change Date"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" checked={isScoreOn} onChange={handleChange('isScoreOn')} value="isScoreOn"/>
          }
          label="score"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" checked={isSizeOn} onChange={handleChange('isSizeOn')} value="isSizeOn"/>
          }
          label="size"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" checked={isMarriedOn} onChange={handleChange('isMarriedOn')} value="isMarriedOn"/>
          }
          label="married"
        />
      </FormGroup>
    </FormControl>
  )
}

Checkboxes.propTypes = {
  columns: PropTypes.shape({
    isEmailOn: PropTypes.bool,
    isChangeDateOn: PropTypes.bool,
    isScoreOn: PropTypes.bool,
    isSizeOn: PropTypes.bool,
    isMarriedOn: PropTypes.bool,
    handleChange: PropTypes.func,
  }).isRequired,
}
