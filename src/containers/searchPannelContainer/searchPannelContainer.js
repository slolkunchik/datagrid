import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SearchPannel from '../../components/searchPannel/searchPannel'
import {filterSettingsChanged} from '../../actions/actionCreator'

export default function() {
  const [searchValue, setSearchValue] = useState('')
  const [selectValue, setSelectValue] = useState([])
  const [switchValue, setSwitchValue] = useState(false)
  const dispatch = useDispatch()
  const { filterKeys } = useSelector(state => ({
    filterKeys: state.tableData.filterKeys,
  }))
  const handleSelectChange = (event) => {
    if (event === null) {
      return;
    }
    const selectedOptions = event.map((option)=>option.value)
    setSelectValue(selectedOptions)
  }

  useEffect(() => {
    if (!searchValue && selectValue.length === 0 ) {
      return;
    }
    const timer = setTimeout(() => {
      dispatch(filterSettingsChanged(
        {
          ...filterKeys,
          searchValue: searchValue,
          selectValue: selectValue,
          isMarriedChecked: switchValue,
        })
      )
    }, 400)
    return () => clearTimeout(timer)
  }, [searchValue, switchValue, selectValue, dispatch])

  return (
    <SearchPannel handleSearchChange={event => {setSearchValue(event.target.value)}}
                  handleSelectChange={handleSelectChange}
                  handleSwitchChange={event => setSwitchValue(event.target.checked)}
                  value = {searchValue}
    />
  )
}