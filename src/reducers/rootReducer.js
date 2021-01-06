import { combineReducers} from 'redux'
import tableData from './tableSortReducer'
import toolsSettings from './toolSettingsReducer'
import virtualization from './isVirtOnReducer'

const rootReducer = combineReducers({ tableData, toolsSettings, virtualization })

export  default rootReducer