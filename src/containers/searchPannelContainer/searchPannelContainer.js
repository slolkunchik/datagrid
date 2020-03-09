import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SearchPannel from '../../components/searchPannel/searchPannel'
import {filterSettingsChanged} from '../../actions/actionCreator'

export default function() {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const { initialStudentsData} = useSelector(state => ({
    initialStudentsData: state.tableData.initialStudentsData,
  }))

  const doFilter = (values, filterKey, fields = ['name']) => {
    if (!filterKey) {
      return values
    }

    const lowerCaseFilterKey = filterKey.toLowerCase()

    return values.filter(value =>
      Object.keys(value)
        .map(key =>
          fields.includes(key) ? value[key].toString().toLowerCase() : ''
        )
        .find(element => element.toString().includes(lowerCaseFilterKey))
    )
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const filteredStudents = doFilter(initialStudentsData, searchValue, [
        'name',
        'email',
        'score',
      ])
      dispatch(filterSettingsChanged(filteredStudents))
    }, 400)
    return () => clearTimeout(timeOutId);
  }, [searchValue, initialStudentsData, dispatch])

  return (
    <SearchPannel onChange={event => setSearchValue(event.target.value)} value = {searchValue}/>
  )
}