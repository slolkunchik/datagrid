import { ACTION_SORT_SETTINGS_CHANGED, ACTION_DATA_CHANGED } from '../constants'

export const sortSettingsChanged = (newTableHeadData)=> ({
  type: ACTION_SORT_SETTINGS_CHANGED,
  newTableHeadData
})

export const dataChanged = (newStudentsData)=> ({
  type: ACTION_DATA_CHANGED,
  newStudentsData
})
