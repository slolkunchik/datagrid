import React from 'react'
import { FixedSizeList as List } from 'react-window'
import TableRow from '../tableRow/TableRow'
import AutoSizer from 'react-virtualized-auto-sizer'

export default function TableBodyVirtualized({students, onSelectRow, selectedRows, isVirtualizationOn}) {
  const Row = ({ index, style }) => {
    const row = students[index]
    return (
      <TableRow
        onSelectRow={onSelectRow}
        selectedRows={selectedRows}
        isVirtualizationOn={isVirtualizationOn}
        style={style}
        student={row}
      />)
  }

  return (
    <AutoSizer>
      {({ width }) => (
        <List
          height={450}
          itemSize={65}
          width={width}
          itemCount={students.length}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  )
}
