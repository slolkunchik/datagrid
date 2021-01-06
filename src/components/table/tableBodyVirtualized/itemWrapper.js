import React from 'react'
import PropTypes from 'prop-types'

const ItemWrapper = ({ data, index, style }) => {
  const { ItemRenderer, stickyIndices } = data
  if (stickyIndices && stickyIndices.includes(index)) {
    return null;
  }
  return <ItemRenderer index={index} style={style} />;
};

export default ItemWrapper

ItemWrapper.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
}

ItemWrapper.defaultProps = {
  students: [],
  selectedRows: [],
}