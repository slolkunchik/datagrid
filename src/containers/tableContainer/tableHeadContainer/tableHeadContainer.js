import React from 'react'
import TableHead from '../../../components/table/tableHead/TableHead'
import { useSelector, useDispatch } from 'react-redux'
import { sortSettingsChanged } from '../../../actions/actionCreator'
import { SORT_DIRECTION_ASC, SORT_DIRECTION_DESC  } from '../../../constants'
import PropTypes from 'prop-types'

export default function TableHeadContainer({ handleSortClick, onSelectAll, selectedNumber }) {
  const { tableHeadData, columns } = useSelector(state => ({
    tableHeadData: state.tableData.tableHeadData,
    columns: state.toolsSettings.columns,
  }))
  const dispatch = useDispatch()
  const handleClickColumn = (event, clickedElement) => {
    const isShiftPressed = event.shiftKey

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

    let newTableHeadData = tableHeadData

    if (isShiftPressed) {
      changeSortQueue(index, stateElement)
    } else {
      newTableHeadData = tableHeadData.map((headElement) => ({
        ...headElement,
        isSorted: false,
        sortQueue: 1
      }))
    }
    newTableHeadData[index].isSorted = true

    dispatch(sortSettingsChanged(newTableHeadData))

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
    <TableHead
      handleClickColumn={ handleClickColumn }
      onSelectAll={onSelectAll}
      selectedNumber={selectedNumber}
      columns={columns}
      tableHeadData={tableHeadData}
    />
  )
}

TableHeadContainer.propTypes = {
  handleSortClick: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  selectedNumber: PropTypes.number.isRequired,
}
