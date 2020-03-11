import {
  ACTION_SEARCH_VALUE_CHANGED,
  ACTION_SELECT_VALUE_CHANGED,
  ACTION_SWITCH_CHANGED,
} from '../constants'

const filters = {
  searchFieldsArray: ['name', 'email', 'score'],
  searchValue: '',
  selectValue: [],
  isMarriedChecked: false,
}

const filterReducer = (state = filters,
                      {type, newSearchValue, newSelectValue, newSwitchPosition}) => {

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
    default:
      return state;
  }
}

export default filterReducer
