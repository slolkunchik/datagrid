import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import useStyles from './tableHead-styles'
import SortIcon from '@material-ui/icons/Sort'
import headerData from '../../../data/tableHeadData'
import clsx from 'clsx'
import { SORT_DIRECTION_DESC  } from '../../../constants'

export default function StickyTableHead({ handleClickColumn }) {
  const classes = useStyles()

  return (
    <TableHead>
      <TableRow>
        {headerData.map((el, index) =>
          <TableCell className={classes.tableHeadCell}
                     align="center"
                     key={`headerName-${index}`}
                     onClick={(e) => handleClickColumn(e, el) }>
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
              : el.id !== 'checkbox'
                ? <>
                    <SortIcon fontSize="small" className={classes.sortedIconHidden}/>
                    <span className={classes.sortQueueHidden}>{el.sortQueue}</span>
                  </>
                : null
            }
          </TableCell>)
        }
      </TableRow>
    </TableHead>
  );
}
