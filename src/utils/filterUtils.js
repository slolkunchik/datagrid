export const doFilter = (values, filterKey, searchFieldsArray, selectValuesArray, isSwitchChecked) => {
  if (!filterKey) {
    return values
  }

  const lowerCaseFilterKey = filterKey.toLowerCase()

  const filteredArray = values.filter(value =>
    Object.keys(value)
      .map(key =>
        searchFieldsArray.includes(key) ? value[key].toString().toLowerCase() : ''
      )
      .find(element => element.toString().includes(lowerCaseFilterKey))
  )

  if(selectValuesArray.length > 0) {

  }

  if(isSwitchChecked) {

  }

  return filteredArray
}
