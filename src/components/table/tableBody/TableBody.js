import React from 'react'
import TableRow from '../tableRow/TableRow'
import PropTypes from 'prop-types'

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

TableBody.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    score: PropTypes.number,
    changeDate: PropTypes.object,
    size: PropTypes.object,
    isMarried: PropTypes.bool,
  })),
  onSelectRow: PropTypes.func.isRequired,
  selectedRows: PropTypes.arrayOf(PropTypes.number),
  isVirtualizationOn: PropTypes.bool.isRequired,
  columns: PropTypes.objectOf(PropTypes.bool).isRequired,
}

TableBody.defaultProps = {
  students: [],
  selectedRows: [],
}