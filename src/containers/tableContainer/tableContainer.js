import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'
import TableHeadContainer from './tableHeadContainer/tableHeadContainer'
import TableBody from '../../components/table/tableBody/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import useStyles from './table-styles'
import {sortDesc, sortAsc} from '../../utils/sortUtils'
import _ from 'lodash'
import {SORT_DIRECTION_ASC} from '../../constants'
import {doFilter} from '../../utils/filterUtils'

export default function CustomTableContainer() {
  const classes = useStyles()
  const {
    initialStudentsData,
    searchValue,
    searchFieldsArray,
    selectValue,
    isMarriedChecked
  } = useSelector(state => ({
    studentsData: state.tableData.studentsData,
    initialStudentsData: state.tableData.initialStudentsData,
    searchValue: state.filters.searchValue,
    searchFieldsArray: state.filters.searchFieldsArray,
    selectValue: state.filters.selectValue,
    isMarriedChecked: state.filters.isMarriedChecked,
  }))

  const [studentsData, setStudentsData] =  useState(_.cloneDeep(initialStudentsData))

  const handleSortClick = (el, isShiftPressed) => {
    const arrayToSort = isShiftPressed ? studentsData : _.cloneDeep(initialStudentsData)

    el.sortDirection === SORT_DIRECTION_ASC
      ? sortAsc(el.id, arrayToSort)
      : sortDesc(el.id, arrayToSort)

    setStudentsData(arrayToSort)
  }

  const filteredStudents = searchValue.length > 0
    ? doFilter(studentsData, searchValue, searchFieldsArray, selectValue, isMarriedChecked)
    : studentsData

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} stickyHeader aria-label="sticky table">
        <TableHeadContainer handleSortClick={handleSortClick} />
        <TableBody students={ filteredStudents }/>
      </Table>
    </TableContainer>
  );
}
