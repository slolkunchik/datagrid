import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'
import TableHeadContainer from './tableHeadContainer/tableHeadContainer'
import TableBody from '../../components/table/tableBody/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import useStyles from './table-styles'
import {sortDesc, sortAsc} from '../../utils/sortUtils'
import _ from 'lodash'
import {SORT_DIRECTION_ASC} from '../../constants'
import {dataChanged} from '../../actions/actionCreator'
import {doFilter} from '../../utils/filterUtils'

export default function CustomTableContainer() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { studentsData, initialStudentsData, searchValue, searchFieldsArray} = useSelector(state => ({
    studentsData: state.tableData.studentsData,
    initialStudentsData: state.tableData.initialStudentsData,
    searchValue: state.tableData.filterKeys.searchValue,
    searchFieldsArray: state.tableData.filterKeys.searchFieldsArray,
  }))

  const handleSortClick = (el, isShiftPressed) => {
    const arrayToSort = isShiftPressed ? studentsData : _.cloneDeep(initialStudentsData)

    el.sortDirection === SORT_DIRECTION_ASC
      ? sortAsc(el.id, arrayToSort)
      : sortDesc(el.id, arrayToSort)

    dispatch(dataChanged(arrayToSort))
  }

  const filteredStudents = searchValue.length > 0 ? doFilter(studentsData, searchValue, searchFieldsArray) : studentsData

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} stickyHeader aria-label="sticky table">
        <TableHeadContainer handleSortClick={handleSortClick} />
        <TableBody students={ filteredStudents }/>
      </Table>
    </TableContainer>
  );
}
