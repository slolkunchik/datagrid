import {
  ACTION_SORT_SETTINGS_CHANGED,
} from '../constants'
import studentsData from '../data/studentsData'
import tableHeadData from '../data/tableHeadData'

const tableData = {
  initialStudentsData: studentsData,
  tableHeadData,
}

const tableDataReducer = (state = tableData,
                          {type, newTableHeadData}) => {

  switch (type) {
    case ACTION_SORT_SETTINGS_CHANGED:
      return {
        ...state,
        tableHeadData: newTableHeadData
      };
    default:
      return state;
  }
}

export default tableDataReducer