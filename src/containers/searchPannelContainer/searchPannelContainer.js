import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SearchPannel from '../../components/searchPannel/searchPannel'
import {filterSettingsChanged} from '../../actions/actionCreator'

export default function() {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const { initialStudentsData, filterKeys} = useSelector(state => ({
    initialStudentsData: state.tableData.initialStudentsData,
    filterKeys: state.tableData.filterKeys,
  }))
  const {searchFieldsArray} = filterKeys

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(filterSettingsChanged(
        {
          ...filterKeys,
          searchValue: searchValue
        })
      )
    }, 400)
    return () => clearTimeout(timeOutId);
  }, [searchValue, initialStudentsData, filterKeys, searchFieldsArray, dispatch])

  return (
    <SearchPannel onChange={event => setSearchValue(event.target.value)} value = {searchValue}/>
  )
}