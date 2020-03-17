import React, {forwardRef }  from 'react'
import TableRow from '../tableRow/TableRow'
import AutoSizer from 'react-virtualized-auto-sizer'
import TableHeadContainer from "../../../containers/tableContainer/tableHeadContainer/tableHeadContainer"
import { StickyVirtualizedList, StickyVirtualizedListContext } from '../../../containers/tableContainer/StickyVirtualizedList'
import PropTypes from 'prop-types'

export default function TableBodyVirtualized({ children, stickyIndices, ...rest }) {
  const {students, onSelectRow, selectedRows, isVirtualizationOn, handleSortClick, onSelectAll, columns} = rest
  const data = [null, ...students]

  const Row = ({ index, style }) => {
    const row = data[index]
    return (
      <TableRow
        onSelectRow={onSelectRow}
        selectedRows={selectedRows}
        isVirtualizationOn={isVirtualizationOn}
        style={style}
        student={row}
        columns={columns}
      />)
  }

  const StickyRow = () => (
    <TableHeadContainer
      handleSortClick={handleSortClick}
      onSelectAll={onSelectAll}
      selectedNumber={selectedRows.length}/>
  );

  const innerElementType = forwardRef(({ children, ...rest }, ref) => (
    <StickyVirtualizedListContext.Consumer>
      {() => (
        <div ref={ref} {...rest}>
            <StickyRow />
          {children}
        </div>
      )}
    </StickyVirtualizedListContext.Consumer>
  ));

  return (
    <AutoSizer>
      {({ width, height }) => (
        <StickyVirtualizedList
          height={height}
          innerElementType={innerElementType}
          itemCount={data.length}
          itemSize={35}
          width={width}
          stickyIndices={[0]}
        >
          {Row}
        </StickyVirtualizedList>
      )}
    </AutoSizer>
  )
}

TableBodyVirtualized.propTypes = {
  children: PropTypes.func,
  stickyIndices: PropTypes.array,
  rest: PropTypes.array,
}

TableBodyVirtualized.defaultProps = {
  rest: [],
  children: undefined,
  stickyIndices: undefined,
}
