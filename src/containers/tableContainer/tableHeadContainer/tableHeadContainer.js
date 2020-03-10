import React from 'react'
import TableHead from '../../../components/table/tableHead/TableHead'
import { useSelector, useDispatch } from 'react-redux'
import { sortSettingsChanged } from '../../../actions/actionCreator'
import { SORT_DIRECTION_ASC, SORT_DIRECTION_DESC  } from '../../../constants'

export default function TableHeadContainer({ handleSortClick }) {
  const { tableHeadData } = useSelector(state => ({
    tableHeadData: state.tableData.tableHeadData,
  }))
  const dispatch = useDispatch()
  const handleClickColumn = (event, clickedElement) => {
    const isShiftPressed = event.shiftKey

    if(clickedElement.id === 'checkbox') {
      return undefined
    }

    const index = tableHeadData.findIndex((stateElement) => {
      return clickedElement.id === stateElement.id
    });
    const stateElement = tableHeadData[index]

    if (!stateElement.isSorted) {
      stateElement.sortDirection = SORT_DIRECTION_ASC
    } else {
      stateElement.sortDirection === SORT_DIRECTION_ASC
        ? stateElement.sortDirection = SORT_DIRECTION_DESC
        : stateElement.sortDirection = SORT_DIRECTION_ASC
    }

    if (isShiftPressed) {
      changeSortQueue(index, stateElement)
    } else {
      tableHeadData.forEach((headElement) => {
        headElement.isSorted = false
      })
    }
    stateElement.isSorted = true

    dispatch(sortSettingsChanged(tableHeadData))

    handleSortClick(stateElement, isShiftPressed)
  }

  function changeSortQueue(selectedElementIndex, selectedElement) {
    tableHeadData.forEach((headElement) => {
      if ((selectedElement.isSorted) && (selectedElement.sortQueue > headElement.sortQueue)) {
        headElement.sortQueue += 1
      }

      if ((headElement.isSorted) && (!selectedElement.isSorted)) {
        headElement.sortQueue += 1
      }
    })

    selectedElement.sortQueue = 1;
  }

  return (
    <TableHead handleClickColumn={ handleClickColumn } />
  );
}
