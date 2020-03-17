import React from 'react'
import useStyles from './tableHead-styles'
import SortIcon from '@material-ui/icons/Sort'
import clsx from 'clsx'
import {SORT_DIRECTION_DESC} from '../../../constants'
import Checkbox from '@material-ui/core/Checkbox'
import PropTypes from 'prop-types'

export default function StickyTableHead({ handleClickColumn, onSelectAll, selectedNumber, columns, tableHeadData}) {
  const classes = useStyles()
  const {isEmailOn, isChangeDateOn, isScoreOn, isSizeOn, isMarriedOn} = columns
  const dataAdapter = {
    email: isEmailOn,
    changeDate: isChangeDateOn,
    score: isScoreOn,
    size: isSizeOn,
    isMarried: isMarriedOn,
  }

  return (
    <div className={classes.tableHeadRow}>
      <div
        className={clsx(classes.tableHeadCell, classes.checkbox)}
        key="headerName-checkbox"
        onChange={onSelectAll}
      >
        <Checkbox color="primary" checked={selectedNumber > 0}/>
      </div>
      {tableHeadData.map((el, index) => {
        const itemSelfClass = el.id
        if (dataAdapter[itemSelfClass] === undefined || dataAdapter[itemSelfClass]) {
          return <div
            className={clsx(classes.tableHeadCell, classes[itemSelfClass])}
            key={`headerName-${index}`}
            onClick={(e) => handleClickColumn(e, el)}
            title="Hold shift to sort a few columns"
          >
            {el.body}
            { el.isSorted
              ? <>
                <SortIcon
                  fontSize="small"
                  className={clsx(classes.sortedIcon, {
                    [classes.sortedIconRotateToDesc]: el.sortDirection === SORT_DIRECTION_DESC,
                  })}
                />
                <span>{el.sortQueue}</span>
              </>
              : <>
                <SortIcon fontSize="small" className={classes.sortedIconHidden}/>
                <span className={classes.sortQueueHidden}>{el.sortQueue}</span>
              </>
            }
          </div>
        }
      return undefined;
      })}
    </div>
  )
}

StickyTableHead.propTypes = {
  handleClickColumn: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  selectedNumber: PropTypes.number.isRequired,
  columns: PropTypes.objectOf(PropTypes.bool).isRequired,
  tableHeadData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    body: PropTypes.string,
    isSorted: PropTypes.bool,
    sortDirection: PropTypes.string,
    sortQueue: PropTypes.number,
    isFilterKey: PropTypes.bool,
  })).isRequired,
}
