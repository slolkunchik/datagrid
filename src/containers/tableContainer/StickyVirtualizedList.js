import React, { createContext }  from 'react'
import { FixedSizeList as List } from 'react-window'
import ItemWrapper from '../../components/table/tableBodyVirtualized/itemWrapper'

export const StickyVirtualizedListContext = createContext()
StickyVirtualizedListContext.displayName = 'StickyListContext'

export const StickyVirtualizedList = ({ children, stickyIndices, ...rest }) => (
  <StickyVirtualizedListContext.Provider value={{ ItemRenderer: children, stickyIndices }}>
    <List itemData={{ ItemRenderer: children, stickyIndices }} {...rest}>
      {ItemWrapper}
    </List>
  </StickyVirtualizedListContext.Provider>
)