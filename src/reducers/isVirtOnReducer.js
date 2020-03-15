import {
  ACTION_VIRT_CHANGED,
} from '../constants'
import { load } from 'redux-localstorage-simple'

const DATA_GRID = load({ namespace: 'data_grid' })
let virtualization = DATA_GRID.virtualization

if ((!DATA_GRID || !DATA_GRID.virtualization || DATA_GRID.virtualization.isChecked === undefined) ) {
  virtualization = {
    isChecked: true,
  }
}

const isVirtOnReducer = (state = virtualization,
                          {type, isVirtualizationCheck}) => {

  switch (type) {
    case ACTION_VIRT_CHANGED:
      return {
        ...state,
        isChecked: isVirtualizationCheck,
      };
    default:
      return state;
  }
}

export default isVirtOnReducer