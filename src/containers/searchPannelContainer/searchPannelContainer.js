import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import SearchPannel from '../../components/searchPannel/searchPannel'
import {
  filterSearchValueChanged,
  filterSelectValueChanged,
  filterSwitchValueChanged,
} from '../../actions/actionCreator'

export default function() {
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
    if (!searchInputValue) {
      return;
    }
    const timer = setTimeout(() => {
      dispatch(filterSearchValueChanged(searchInputValue)
    )
    }, 400)
    return () => clearTimeout(timer)
  }, [searchInputValue, dispatch])

  return (
    <SearchPannel
      handleSearchChange={event => {setSearchValue(event.target.value)}}
      handleSelectChange={handleSelectChange}
      handleSwitchChange={event => dispatch(filterSwitchValueChanged(event.target.checked))}
      value = {searchInputValue}
    />
  )
}