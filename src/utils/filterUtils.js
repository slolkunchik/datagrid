export const doFilter = (values, filterKey, fields) => {
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
