import Checkbox from '@material-ui/core/Checkbox'
import React from 'react'
import { SORT_DIRECTION_ASC } from '../constants'

const headerData = [
  {
    id: 'checkbox',
    body: <Checkbox />,
    isSorted: false,
    sortDirection: SORT_DIRECTION_ASC,
    sortQueue: 1,
},
  {
    id: 'id',
    body: '#',
    isSorted: false,
    sortDirection: SORT_DIRECTION_ASC,
    sortQueue: 1,
  },
  {
    id: 'name',
    body: 'name',
    isSorted: false,
    sortDirection: SORT_DIRECTION_ASC,
    sortQueue: 1,
  },
  {
    id: 'email',
    body: 'email',
    isSorted: false,
    sortDirection: SORT_DIRECTION_ASC,
    sortQueue: 1,
  },
  {
    id: 'changeDate',
    body: 'change Date',
    isSorted: false,
    sortDirection: SORT_DIRECTION_ASC,
    sortQueue: 1,
  },
  {
    id: 'score',
    body: 'score',
    isSorted: false,
    sortDirection: SORT_DIRECTION_ASC,
    sortQueue: 1,
  },
  {
    id: 'size',
    body: 'T-shirt size',
    isSorted: false,
    sortDirection: SORT_DIRECTION_ASC,
    sortQueue: 1,
  },
  {
    id: 'isMarried',
    body: 'married',
    isSorted: false,
    sortDirection: SORT_DIRECTION_ASC,
    sortQueue: 1,
  }
]

export default headerData