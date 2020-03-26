import React, {useState,  useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import TableHeadContainer from './tableHeadContainer/tableHeadContainer'
import TableBody from '../../components/table/tableBody/TableBody'
import TableBodyVirtualized from '../../components/table/tableBodyVirtualized/tableBodyVirtualized'
import useStyles from './table-styles'
import {doSort} from '../../utils/sortUtils'
import {doFilter} from '../../utils/filterUtils'
import DeletePanel from '../../components/deletePanel/deletePanel'
import {dataChanged} from '../../actions/actionCreator'
import ExportCSVContainer from '../exportCSVContainer/exportCSVContainer'
import QueryStringExample from '../../components/queryStringExample/queryStringExample'

export default function CustomTableContainer() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    initialStudentsData,
    searchValue,
    searchFieldsArray,
    selectValue,
    isMarriedChecked,
    isVirtualizationOn,
    columns,
    tableHeadData,
  } = useSelector(state => ({
    initialStudentsData: state.tableData.initialStudentsData,
    searchValue: state.toolsSettings.searchValue,
    searchFieldsArray: state.toolsSettings.searchFieldsArray,
    selectValue: state.toolsSettings.selectValue,
    isMarriedChecked: state.toolsSettings.isMarriedChecked,
    isVirtualizationOn: state.virtualization.isChecked,
    columns: state.toolsSettings.columns,
    tableHeadData: state.tableData.tableHeadData,
  }))

  const [studentsData, setStudentsData] =  useState([...initialStudentsData])
  const [selectedRows, setSelectedRows] = useState([])
  let filteredStudents = studentsData

  useEffect(() => {
    const sortHeadDataArray = tableHeadData
      .filter((el) => el.isSorted)

    if (sortHeadDataArray.length > 0) {
      let arrayToSort = [...initialStudentsData]
      doSort(arrayToSort, tableHeadData)
      setStudentsData(arrayToSort)
    }
  }, [initialStudentsData, tableHeadData])

  const isFiltered = searchValue.length > 0 || selectValue.length > 0 || isMarriedChecked

  if (isFiltered) {
    filteredStudents = doFilter(studentsData, searchValue, searchFieldsArray, selectValue, isMarriedChecked)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedRows = filteredStudents.map(student => student.id);
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

  const handleDeleteClick = () => {
    if (selectedRows.length === 0) {
      return;
    }
    const isNotSelected = id => selectedRows.indexOf(id) === -1
    const arrayAfterDelete = studentsData.filter(student => isNotSelected(+student.id))
    const initialArrayAfterDelete = initialStudentsData.filter(student => isNotSelected(+student.id))
    setStudentsData(arrayAfterDelete)
    dispatch(dataChanged(initialArrayAfterDelete))
    setSelectedRows([])
  }

  return (
    <>
      <ExportCSVContainer filteredArray={filteredStudents} columns={columns}/>
      <QueryStringExample />
      <div
        className={classes.container}>
        <DeletePanel
          selectedNumber={selectedRows.length}
          onDeleteClick={handleDeleteClick}
        />
          {isVirtualizationOn
            ? <>
            <div className={classes.divider}></div>
            <TableBodyVirtualized isVirtualizationOn={isVirtualizationOn}
                                    students={filteredStudents}
                                    selectedRows={selectedRows}
                                    onSelectRow={handleSelectRow}
                                    onSelectAll={handleSelectAllClick}
                                    columns={columns}
            />
            </>
            : <div
              className={classes.table}>
              <TableHeadContainer
                onSelectAll={handleSelectAllClick}
                selectedNumber={selectedRows.length}
              />
              <TableBody isVirtualizationOn={isVirtualizationOn}
                           students={filteredStudents}
                           selectedRows={selectedRows}
                           onSelectRow={handleSelectRow}
                           columns={columns}
              />
            </div>
          }
      </div>
    </>
  );
}
