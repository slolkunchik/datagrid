import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
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
import DeletePanel from '../../components/deletePanel/deletePanel'
import {dataChanged} from '../../actions/actionCreator'

export default function CustomTableContainer() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    initialStudentsData,
    searchValue,
    searchFieldsArray,
    selectValue,
    isMarriedChecked
  } = useSelector(state => ({
    initialStudentsData: state.tableData.initialStudentsData,
    searchValue: state.filters.searchValue,
    searchFieldsArray: state.filters.searchFieldsArray,
    selectValue: state.filters.selectValue,
    isMarriedChecked: state.filters.isMarriedChecked,
  }))

  const [studentsData, setStudentsData] =  useState(_.cloneDeep(initialStudentsData))
  const [selectedRows, setSelectedRows] = useState([])

  const handleSortClick = (el, isShiftPressed) => {
    const arrayToSort = isShiftPressed ? studentsData : _.cloneDeep(initialStudentsData)

    el.sortDirection === SORT_DIRECTION_ASC
      ? sortAsc(el.id, arrayToSort)
      : sortDesc(el.id, arrayToSort)

    setStudentsData(arrayToSort)
  }
  const isFiltered = searchValue.length > 0 || selectValue.length > 0 || isMarriedChecked

  let filteredStudents = isFiltered
    ? doFilter(studentsData, searchValue, searchFieldsArray, selectValue, isMarriedChecked)
    : studentsData

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedRows = studentsData.map(student => student.id);
      setSelectedRows(newSelectedRows);
      return;
    }
    setSelectedRows([]);
  }

  const handleSelectRow = (event, id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelectedRows = [];

    if (selectedIndex === -1) {
      newSelectedRows = newSelectedRows.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedRows = newSelectedRows.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1),
      );
    }

    setSelectedRows(newSelectedRows);
  }

  const handleDeleteClick = ()=> {
    if (selectedRows.length === 0) {
      return;
    }
    const isNotSelected = id => selectedRows.indexOf(id) === -1
    const arrayAfterDelet = studentsData.filter(student => isNotSelected(+student.id))
    setStudentsData(arrayAfterDelet)
    dispatch(dataChanged(arrayAfterDelet))
    setSelectedRows([])
  }

  return (
    <>
      <DeletePanel
        selectedNumber={selectedRows.length}
        onDeleteClick={handleDeleteClick}/>
      <TableContainer
        component={Paper}
        className={classes.container}>
        <Table
          className={classes.table}
          stickyHeader
          aria-label="sticky table">
          <TableHeadContainer
            handleSortClick={handleSortClick}
            onSelectAll={handleSelectAllClick}
            selectedNumber={selectedRows.length}/>
          <TableBody
            students={filteredStudents}
            selectedRows={selectedRows}
            onSelectRow={handleSelectRow}/>
        </Table>
      </TableContainer>
    </>
  );
}
