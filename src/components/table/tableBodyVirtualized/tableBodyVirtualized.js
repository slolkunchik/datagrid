import React, {forwardRef }  from 'react'
import TableRow from '../tableRow/TableRow'
import AutoSizer from 'react-virtualized-auto-sizer'
import TableHeadContainer from "../../../containers/tableContainer/tableHeadContainer/tableHeadContainer"
import { StickyList, StickyListContext } from './stickyList'

export default function TableBodyVirtualized({ children, stickyIndices, ...rest }) {
  const {students, onSelectRow, selectedRows, isVirtualizationOn, handleSortClick, onSelectAll} = rest
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
      />)
  }

  const StickyRow = () => (
    <TableHeadContainer
      handleSortClick={handleSortClick}
      onSelectAll={onSelectAll}
      selectedNumber={selectedRows.length}/>
  );

  const innerElementType = forwardRef(({ children, ...rest }, ref) => (
    <StickyListContext.Consumer>
      {() => (
        <div ref={ref} {...rest}>
            <StickyRow />
          {children}
        </div>
      )}
    </StickyListContext.Consumer>
  ));

  return (
    <AutoSizer>
      {({ width, height }) => (
        <StickyList
          height={height}
          innerElementType={innerElementType}
          itemCount={data.length}
          itemSize={65}
          width={width}
          stickyIndices={[0]}
        >
          {Row}
        </StickyList>
      )}
    </AutoSizer>
  )
}
