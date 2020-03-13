import React from 'react'

const ItemWrapper = ({ data, index, style }) => {
  const { ItemRenderer, stickyIndices } = data
  if (stickyIndices && stickyIndices.includes(index)) {
    return null;
  }
  return <ItemRenderer index={index} style={style} />;
};

export default ItemWrapper