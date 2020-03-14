import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterSearchValueChanged,
  filterSelectValueChanged,
  filterSwitchValueChanged,
  isVirtualizationOn,
} from '../../actions/actionCreator'

export default function() {
  const {
    isVirtOn,
  } = useSelector(state => ({
    isVirtOn: state.virtualization.isChecked,
  }))
  const [searchInputValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
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
    />
  )
}