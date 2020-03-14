import React from 'react'
import TableRow from '../tableRow/TableRow'
import TableBodyVirtualized from "../tableBodyVirtualized/tableBodyVirtualized";

export default function TableBody({students, onSelectRow, selectedRows, isVirtualizationOn, columns}) {
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
            columns={columns}
          />)
      })
    }
    </>
  )
}