import {
  ACTION_SORT_SETTINGS_CHANGED,
  ACTION_DATA_CHANGED,
} from '../constants'
import studentsData from '../data/studentsData'
import tableHeadData from '../data/tableHeadData'
import { load } from 'redux-localstorage-simple'

const DATA_GRID = load({ namespace: 'data_grid' })

let tableData;

if ((!DATA_GRID || !DATA_GRID.tableData) ) {
 tableData = {
    initialStudentsData: studentsData,
    tableHeadData,
  }
} else {
  DATA_GRID.tableData.initialStudentsData
    .forEach((student) => {student.changeDate = new Date(student.changeDate)})
  tableData = DATA_GRID.tableData
}

const tableDataReducer = (state = tableData,
                          {type, newTableHeadData, newStudentsData}) => {

  switch (type) {
    case ACTION_SORT_SETTINGS_CHANGED:
      return {
        ...state,
        tableHeadData: newTableHeadData
      };
    case ACTION_DATA_CHANGED:
      return {
        ...state,
        initialStudentsData: newStudentsData
      };
    default:
      return state;
  }
}

export default tableDataReducer