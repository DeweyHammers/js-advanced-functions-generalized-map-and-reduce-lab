const map = (array, func) => {
  return array.map(num => func(num))
}

const reduce = (array, func, startingPoint) => {
  if (!startingPoint){
    return array.reduce((e, memo) => func(e, memo))
  } else {
    return array.reduce((e, memo) => func(e, memo), startingPoint)
  }
}