import React from 'react'
import ExportCSV from '../../components/exportCSV/exportCSV'
import {defineTitlesCVS, defineBodyCVS} from '../../utils/cvsUtils'
import PropTypes from 'prop-types'

export default function ExportCSVContainer ({filteredArray, columns}) {

  const handleExportClick = () => {
    const { isEmailOn, isChangeDateOn, isScoreOn, isSizeOn, isMarriedOn } = columns
    const headData = defineTitlesCVS( isEmailOn, isChangeDateOn, isScoreOn, isSizeOn, isMarriedOn )

    const data = filteredArray.reduce((acc, el) => {
      let bodyString = defineBodyCVS(isEmailOn, isChangeDateOn, isScoreOn, isSizeOn, isMarriedOn, el)
      return `${acc}${bodyString}\n`
    },`${headData}\n`)

    let link = document.createElement('a')
    link.download = 'dataGrid Slolkunchik.csv'
    let blob = new Blob([data],
      { type: 'application/csv' }
    );
    link.href = URL.createObjectURL(blob)
    link.click()
  }

  return (
    <ExportCSV handleExportClick={handleExportClick} />
  )
}

ExportCSVContainer.propTypes = {
  filteredArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    score: PropTypes.number,
    changeDate: PropTypes.object,
    size: PropTypes.object,
    isMarried: PropTypes.bool,
  })),
  columns: PropTypes.objectOf(PropTypes.bool).isRequired,
}

ExportCSVContainer.defaultProps = {
  filteredArray: [],
}