import {
  ACTION_SORT_SETTINGS_CHANGED,
  ACTION_DATA_CHANGED,
  ACTION_FILTER_SETTINGS_CHANGED,
} from '../constants'
import studentsData from '../data/studentsData'
import tableHeadData from '../data/tableHeadData'
import _ from 'lodash'

const initialState = {
  initialStudentsData: _.cloneDeep(studentsData),
  studentsData,
  tableHeadData,
  searchValue: '',
}

const tableDataReducer = (state = initialState,
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
        studentsData: newStudentsData
      };
    case ACTION_FILTER_SETTINGS_CHANGED:
      return {
        ...state,
        studentsData: newStudentsData,
      };
    default:
      return state;
  }
}

export default tableDataReducer