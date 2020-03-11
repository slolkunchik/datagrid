import {
  ACTION_SORT_SETTINGS_CHANGED,
  ACTION_SEARCH_VALUE_CHANGED,
  ACTION_SELECT_VALUE_CHANGED,
  ACTION_SWITCH_CHANGED,
  ACTION_DATA_CHANGED,
} from '../constants'

export const sortSettingsChanged = (newTableHeadData)=> ({
  type: ACTION_SORT_SETTINGS_CHANGED,
  newTableHeadData
})

export const filterSearchValueChanged = (newSearchValue)=> ({
  type: ACTION_SEARCH_VALUE_CHANGED,
  newSearchValue
})

export const filterSelectValueChanged = (newSelectValue)=> ({
  type: ACTION_SELECT_VALUE_CHANGED,
  newSelectValue
})

export const filterSwitchValueChanged = (newSwitchPosition)=> ({
  type: ACTION_SWITCH_CHANGED,
  newSwitchPosition
})

export const dataChanged = (newStudentsData)=> ({
  type: ACTION_DATA_CHANGED,
  newStudentsData
})