import { SORT } from '../constants'
import initialData from '../data/studentsData'

const students = (state = initialData, {type, newState}) => {
  switch (type) {
    case SORT :
      return [
        ...newState,
      ];
    default:
      return state;
  }
}

export default students;