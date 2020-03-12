import React from 'react'
import TableRow from '../tableRow/TableRow'

export default function TableBody({students, onSelectRow, selectedRows, isVirtualizationOn}) {
  return (
    <>
    {
      students.map(row => {
        return (
          <TableRow
            key={`row-${row.id}`}
            onSelectRow={onSelectRow}
            selectedRows={selectedRows}
            isVirtualizationOn={isVirtualizationOn}
            student={row}
          />)
      })
    }
    </>
  )
}