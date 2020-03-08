import React from 'react'
import TableRow from '../../../components/table/tableRow/TableRow'
import { useSelector } from 'react-redux'
import TableBody from '@material-ui/core/TableBody'

export default function TableBodyContainer() {
  const { studentsData } = useSelector(state => ({
    studentsData: state.tableData.studentsData,
  }))

  return (
    <TableBody>
      {studentsData.map(row => (
        <TableRow key={`row-${row.id}`} row={row}/>
      ))}
    </TableBody>
  );
}
