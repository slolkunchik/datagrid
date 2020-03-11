import {
  ACTION_SORT_SETTINGS_CHANGED,
  ACTION_DATA_CHANGED,
} from '../constants'
import studentsData from '../data/studentsData'
import tableHeadData from '../data/tableHeadData'

const tableData = {
  initialStudentsData: studentsData,
  tableHeadData,
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