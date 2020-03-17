import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

export default function ExportCSV ({handleExportClick}) {
  return (
    <Button variant="contained" color="primary" onClick={handleExportClick}>
      Export to CSV file
    </Button>
  )
}

ExportCSV.propTypes = {
  handleExportClick: PropTypes.func.isRequired
}