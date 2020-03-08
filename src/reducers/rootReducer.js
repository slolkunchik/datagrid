import { combineReducers} from 'redux'
import tableData from './tableDataReducer'

const rootReducer = combineReducers({tableData: tableData})

export  default rootReducer