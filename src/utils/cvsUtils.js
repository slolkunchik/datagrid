export function defineTitlesCVS (columns) {
  const { isEmailOn, isChangeDateOn, isScoreOn, isSizeOn, isMarriedOn } = columns
  let initialString = 'id, name'
  if(isEmailOn) {
    initialString = `${initialString}, email`
  }
  if(isChangeDateOn) {
    initialString = `${initialString}, change Date`
  }
  if(isScoreOn) {
    initialString = `${initialString}, score`
  }
  if(isSizeOn) {
    initialString = `${initialString}, T-shirt size`
  }
  if(isMarriedOn) {
    initialString = `${initialString}, married`
  }
  return initialString
}

export function defineBodyCVS (columns, el) {
  const { isEmailOn, isChangeDateOn, isScoreOn, isSizeOn, isMarriedOn } = columns
  let initialBodyString = `${el.id}, ${el.name}`
  if (isEmailOn) {
    initialBodyString = `${initialBodyString}, ${el.email}`
  }
  if (isChangeDateOn) {
    initialBodyString = `${initialBodyString}, ${el.changeDate.toDateString('en-US')}`
  }
  if (isScoreOn) {
    initialBodyString = `${initialBodyString}, ${el.score}`
  }
  if (isSizeOn) {
    initialBodyString = `${initialBodyString}, ${el.size.value}`
  }
  if (isMarriedOn) {
    initialBodyString = `${initialBodyString}, ${el.isMarried ? 'Yes' : 'No'}`
  }
  return initialBodyString
}