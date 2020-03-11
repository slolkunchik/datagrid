import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import useStyles from './tableHead-styles'
import SortIcon from '@material-ui/icons/Sort'
import headerData from '../../../data/tableHeadData'
import clsx from 'clsx'
import { SORT_DIRECTION_DESC } from '../../../constants'
import Checkbox from '@material-ui/core/Checkbox'

export default function StickyTableHead({ handleClickColumn, onSelectAll, selectedNumber}) {
  const classes = useStyles()

  return (
    <TableHead>
      <TableRow>
        <TableCell
          className={classes.tableHeadCell}
          align="center"
          key='headerName-checkbox'
          onChange={onSelectAll}
        >
          <Checkbox checked={selectedNumber > 0}/>
        </TableCell>
        {headerData.map((el, index) =>
          <TableCell
            className={classes.tableHeadCell}
            align="center"
            key={`headerName-${index}`}
            onClick={(e) => handleClickColumn(e, el)}
            title='Hold shift to sort a few columns'
          >
            {el.body}
            { el.isSorted
              ? <>
                  <SortIcon fontSize="small" className=
                  {clsx(classes.sortedIcon, {
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
          </TableCell>)
        }
      </TableRow>
    </TableHead>
  );
}
