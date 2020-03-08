import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'
import TableHeadContainer from './tableHeadContainer/tableHeadContainer'
import TableBodyContainer from './tableBodyContainer/tableBodyContainer'
import TableContainer from '@material-ui/core/TableContainer'
import useStyles from './table-styles'
import { SORT_DIRECTION_ASC } from '../../constants'
import {dataChanged} from '../../actions/actionCreator'
import _ from 'lodash'

export default function CustomTableContainer() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { studentsData, initialStudentsData } = useSelector(state => ({
    studentsData: state.tableData.studentsData,
    initialStudentsData: state.tableData.initialStudentsData,
  }))

  function sortDesc(sortKey, arrayToSort) {
    if (sortKey === 'size') {
      arrayToSort.sort((elA, elB) => {
        if (elA[sortKey].weight < elB[sortKey].weight) {
          return 1;
        }
        if (elA[sortKey].weight > elB[sortKey].weight) {
          return -1;
        }
        return 0;
      })
      return undefined;
    }
    arrayToSort.sort((elA, elB) => {
      if (elA[sortKey] < elB[sortKey]) {
        return 1;
      }
      if (elA[sortKey] > elB[sortKey]) {
        return -1;
      }
      return 0;
    })
  }

  function sortAsc(sortKey, arrayToSort) {
    if (sortKey === 'size') {
      arrayToSort.sort((elA, elB) => {
        if (elA[sortKey].weight > elB[sortKey].weight) {
          return 1;
        }
        if (elA[sortKey].weight < elB[sortKey].weight) {
          return -1;
        }
        return 0;
      })
      return undefined;
    }
    arrayToSort.sort((elA, elB) => {
      if (elA[sortKey] > elB[sortKey]) {
        return 1;
      }
      if (elA[sortKey] < elB[sortKey]) {
        return -1;
      }
      return 0;
    })
  }

  const handleSortClick = (el, isShiftPressed) => {
    const arrayToSort = isShiftPressed ? studentsData : _.cloneDeep(initialStudentsData)

    el.sortDirection === SORT_DIRECTION_ASC
    ? sortAsc(el.id, arrayToSort)
    : sortDesc(el.id, arrayToSort)

    dispatch(dataChanged(arrayToSort))
  }

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} stickyHeader aria-label="sticky table">
        <TableHeadContainer handleSortClick={handleSortClick} />
        <TableBodyContainer />
      </Table>
    </TableContainer>
  );
}
