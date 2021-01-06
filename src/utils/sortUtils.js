import {SORT_DIRECTION_ASC} from "../constants";

export function sortDesc(sortKey, arrayToSort) {
  if (sortKey === 'changeDate') {
    arrayToSort.sort((elA, elB) => {
      let result

      result = elA[sortKey].getFullYear() < elB[sortKey].getFullYear()
        ? 1
        : elA[sortKey].getFullYear() > elB[sortKey].getFullYear()
          ? -1
          : 0

      if (result === 0) {
        result = elA[sortKey].getMonth() < elB[sortKey].getMonth()
          ? 1
          : elA[sortKey].getMonth() > elB[sortKey].getMonth()
            ? -1
            : 0
      }
      if (result === 0) {
        result = elA[sortKey].getDate() < elB[sortKey].getDate()
          ? 1
          : elA[sortKey].getDate() > elB[sortKey].getDate()
            ? -1 : 0
      }
      return result
    })
    return undefined;
  }
  if (sortKey === 'size') {
    arrayToSort.sort((elA, elB) => {
      if (elA[sortKey].weight < elB[sortKey].weight) {
        return 1;
      }
      if (elA[sortKey].weight > elB[sortKey].weight) {
        return -1;
      }
      return 0;
    })
    return undefined;
  }
  arrayToSort.sort((elA, elB) => {
    if (elA[sortKey] < elB[sortKey]) {
      return 1;
    }
    if (elA[sortKey] > elB[sortKey]) {
      return -1;
    }
    return 0;
  })
}

export function sortAsc(sortKey, arrayToSort) {
  if (sortKey === 'changeDate') {
    arrayToSort.sort((elA, elB) => {
      let result

      result = elA[sortKey].getFullYear() > elB[sortKey].getFullYear()
        ? 1
        : elA[sortKey].getFullYear() < elB[sortKey].getFullYear()
          ? -1
          : 0

      if (result === 0) {
        result = elA[sortKey].getMonth() > elB[sortKey].getMonth()
          ? 1
          : elA[sortKey].getMonth() < elB[sortKey].getMonth()
            ? -1
            : 0
      }
      if (result === 0) {
        result = elA[sortKey].getDate() > elB[sortKey].getDate()
          ? 1
          : elA[sortKey].getDate() < elB[sortKey].getDate()
            ? -1 : 0
      }
      return result
    })
    return undefined;
  }
  if (sortKey === 'size') {
    arrayToSort.sort((elA, elB) => {
      if (elA[sortKey].weight > elB[sortKey].weight) {
        return 1;
      }
      if (elA[sortKey].weight < elB[sortKey].weight) {
        return -1;
      }
      return 0;
    })
    return undefined;
  }
  arrayToSort.sort((elA, elB) => {
    if (elA[sortKey] > elB[sortKey]) {
      return 1;
    }
    if (elA[sortKey] < elB[sortKey]) {
      return -1;
    }
    return 0;
  })
}

export function doSort (arrayToSort, tableHeadData ) {
  const sortedColumns = tableHeadData
    .filter(data => data.isSorted === true)
    .sort((data1, data2) => data2.sortQueue - data1.sortQueue)
  sortedColumns.forEach(column => {
    column.sortDirection === SORT_DIRECTION_ASC
      ? sortAsc(column.id, arrayToSort)
      : sortDesc(column.id, arrayToSort)
  })
}
