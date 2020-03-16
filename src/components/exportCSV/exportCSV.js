import React from 'react'
import Button from '@material-ui/core/Button'

export default function ({handleExportClick}) {
  return (
    <Button variant="contained" color="primary" onClick={handleExportClick}>
      Export to CSV file
    </Button>
  )
}
