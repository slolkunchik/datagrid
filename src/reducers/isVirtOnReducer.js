import {
  ACTION_VIRT_CHANGED,
} from '../constants'

const virtualization = {
  isChecked: true,
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