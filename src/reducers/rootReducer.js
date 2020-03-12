import { combineReducers} from 'redux'
import tableData from './tableSortReducer'
import filters from './filterReducer'
import virtualization from './isVirtOnReducer'

const rootReducer = combineReducers({ tableData, filters, virtualization })

export  default rootReducer