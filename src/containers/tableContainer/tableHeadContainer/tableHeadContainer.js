import React from 'react'
import TableHead from '../../../components/table/tableHead/TableHead'
import { useSelector, useDispatch } from 'react-redux'
import { sortSettingsChanged } from '../../../actions/actionCreator'
import { SORT_DIRECTION_ASC, SORT_DIRECTION_DESC  } from '../../../constants'
import PropTypes from 'prop-types'

export default function TableHeadContainer({ onSelectAll, selectedNumber }) {
  const { tableHeadData, columns } = useSelector(state => ({
    tableHeadData: state.tableData.tableHeadData,
    columns: state.toolsSettings.columns,
  }))
  const dispatch = useDispatch()
  const handleClickColumn = (event, clickedColumn) => {
    const isShiftPressed = event.shiftKey

    const index = tableHeadData.findIndex((stateColumn) => {
      return clickedColumn.id === stateColumn.id
    });
    const stateColumn = tableHeadData[index]

    if (!stateColumn.isSorted) {
      stateColumn.sortDirection = SORT_DIRECTION_ASC
    } else {
      stateColumn.sortDirection === SORT_DIRECTION_ASC
        ? stateColumn.sortDirection = SORT_DIRECTION_DESC
        : stateColumn.sortDirection = SORT_DIRECTION_ASC
    }

    let newTableHeadData = tableHeadData

    if (isShiftPressed) {
      changeSortQueue(stateColumn)
    } else {
      newTableHeadData = tableHeadData.map((column) => ({
        ...column,
        isSorted: false,
        sortQueue: 1
      }))
    }
    newTableHeadData[index].isSorted = true

    dispatch(sortSettingsChanged([...newTableHeadData]))
  }

  function changeSortQueue(selectedColumn) {
    tableHeadData.forEach((headColumn) => {
      if ((!headColumn.isSorted) && (!selectedColumn.isSorted)) {
        headColumn.sortQueue += 1
      }
    })
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
  onSelectAll: PropTypes.func.isRequired,
  selectedNumber: PropTypes.number.isRequired,
}
