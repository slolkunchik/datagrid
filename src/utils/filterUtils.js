export const doFilter = (values, filterKey, searchFieldsArray, selectValuesArray, isSwitchChecked) => {
  const lowerCaseFilterKey = filterKey.length > 0 ? filterKey.toLowerCase() : ''

  const filteredArray = values.filter(value => {
    let isSearchFilterGood = true
    let isSelectFilterGood = true
    let isSwitchFilterGood = true

    if(filterKey.length > 0) {
      const fieldsForCheck = Object.keys(value)
        .map(key =>
          searchFieldsArray.includes(key) ? value[key].toString().toLowerCase() : ''
        )
      const suitableField = fieldsForCheck.find(element => element.toString().includes(lowerCaseFilterKey))
      isSearchFilterGood = !!suitableField
    }
    if (selectValuesArray.length > 0) {
      isSelectFilterGood = selectValuesArray.includes(value['size'].value)
    }
    if (isSwitchChecked) {
      isSwitchFilterGood = (value['isMarried'] === isSwitchChecked)
    }
    return isSearchFilterGood && isSelectFilterGood && isSwitchFilterGood
    }
  )
  return filteredArray
}
