import React, { createContext }  from 'react'
import { FixedSizeList as List } from 'react-window'
import ItemWrapper from './itemWrapper'

export const StickyListContext = createContext()
StickyListContext.displayName = 'StickyListContext'

export const StickyList = ({ children, stickyIndices, ...rest }) => (
  <StickyListContext.Provider value={{ ItemRenderer: children, stickyIndices }}>
    <List itemData={{ ItemRenderer: children, stickyIndices }} {...rest}>
      {ItemWrapper}
    </List>
  </StickyListContext.Provider>
)