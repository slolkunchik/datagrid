import { combineReducers} from 'redux'
import tableData from './tableSortReducer'
import filters from './filterReducer'

const rootReducer = combineReducers({ tableData, filters })

export  default rootReducer