import {
  ACTION_SEARCH_VALUE_CHANGED,
  ACTION_SELECT_VALUE_CHANGED,
  ACTION_SWITCH_CHANGED,
  ACTION_COLUMNS_CHANGED,
} from '../constants'
import { load } from 'redux-localstorage-simple'

const DATA_GRID = load({ namespace: 'data_grid' })
let toolsSettings = DATA_GRID.toolsSettings

if ((!DATA_GRID || !DATA_GRID.toolsSettings) ) {
  toolsSettings = {
    searchFieldsArray: ['name', 'email', 'score'],
    searchValue: '',
    selectValue: [],
    isMarriedChecked: false,
    columns: {
      isEmailOn: true,
      isChangeDateOn: true,
      isScoreOn: true,
      isMarriedOn: true,
      isSizeOn: true,
    }
  }
}

const toolsSettingsReducer = (state = toolsSettings,
                             {type, newSearchValue, newSelectValue, newSwitchPosition, newColumnsToDisplay}) => {

  switch (type) {
    case ACTION_SEARCH_VALUE_CHANGED:
      return {
        ...state,
        searchValue: newSearchValue,
      };
    case ACTION_SELECT_VALUE_CHANGED:
      return {
        ...state,
        selectValue: newSelectValue,
      };
    case ACTION_SWITCH_CHANGED:
      return {
        ...state,
        isMarriedChecked: newSwitchPosition,
      };
    case ACTION_COLUMNS_CHANGED:
      return {
        ...state,
        columns: newColumnsToDisplay,
      };
    default:
      return state;
  }
}

export default toolsSettingsReducer
