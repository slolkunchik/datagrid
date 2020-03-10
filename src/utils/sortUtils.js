export function sortDesc(sortKey, arrayToSort) {
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

