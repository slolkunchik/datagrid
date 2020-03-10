import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SearchPannel from '../../components/searchPannel/searchPannel'
import {filterSettingsChanged} from '../../actions/actionCreator'

export default function() {
  const [searchValue, setSearchValue] = useState('')
  const [selectValue, setSelectValue] = useState([])
  const [switchValue, setSwitchValue] = useState(false)
  const dispatch = useDispatch()
  const { initialStudentsData, filterKeys } = useSelector(state => ({
    initialStudentsData: state.tableData.initialStudentsData,
    filterKeys: state.tableData.filterKeys,
  }))
  const {searchFieldsArray} = filterKeys

  const handleSelectChange = (event) => {
    const selectedOptions = event.map((option)=>option.value)
    setSelectValue(selectedOptions)
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(filterSettingsChanged(
        {
          ...filterKeys,
          searchValue: searchValue,
          selectValue: selectValue,
          isMarriedChecked: switchValue,
        })
      )
    }, 400)
    return () => clearTimeout(timeOutId);
  }, [searchValue, initialStudentsData, filterKeys, searchFieldsArray, dispatch])

  return (
    <SearchPannel handleSearchChange={event => setSearchValue(event.target.value)}
                  handleSelectChange={handleSelectChange}
                  handleSwitchChange={event => setSwitchValue(event.target.checked)}
                  value = {searchValue}
    />
  )
}