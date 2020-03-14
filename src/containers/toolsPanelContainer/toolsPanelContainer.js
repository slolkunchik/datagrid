import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterSearchValueChanged,
  filterSelectValueChanged,
  filterSwitchValueChanged,
  isVirtualizationOn,
  changeColumnsToDisplay
} from '../../actions/actionCreator'
import ToolsPannel from '../../components/toolsPanel/toolsPanel'

export default function() {
  const {
    isVirtOn,
  } = useSelector(state => ({
    isVirtOn: state.virtualization.isChecked,
  }))
  const [searchInputValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const [columns, setColumns] = React.useState({
    isEmailOn: true,
    isChangeDateOn: true,
    isScoreOn: true,
    isMarriedOn: true,
    isSizeOn: true,
  });

  const handleColumnChange = name => event => {
    setColumns({ ...columns, [name]: event.target.checked });
    dispatch(changeColumnsToDisplay({...columns, [name]: event.target.checked}))
  };

  const dataForColumns = {
    isEmailOn: columns.isEmailOn,
    isChangeDateOn: columns.isChangeDateOn,
    isScoreOn: columns.isScoreOn,
    isMarriedOn: columns.isMarriedOn,
    isSizeOn: columns.isSizeOn,
    handleChange: handleColumnChange,
  }

  const handleSelectChange = (event) => {
    if (event === null) {
      dispatch(filterSelectValueChanged([]))
      return;
    }
    const selectedOptions = event.map((option)=>option.value)
    dispatch(filterSelectValueChanged(selectedOptions))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(filterSearchValueChanged(searchInputValue)
    )
    }, 400)
    return () => clearTimeout(timer)
  }, [searchInputValue, dispatch])

  return (
    <ToolsPannel
      handleSearchChange={event => {setSearchValue(event.target.value)}}
      handleSelectChange={handleSelectChange}
      handleSwitchChange={event => dispatch(filterSwitchValueChanged(event.target.checked))}
      value = {searchInputValue}
      isVirtualizationOn={isVirtOn}
      handleIsVirtualizationCheck={(event)=> dispatch(isVirtualizationOn(event.target.checked))}
      columns={dataForColumns}
    />
  )
}