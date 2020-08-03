const getIndicesOfFirstAndLastTargetElement = (array, targetElement) => {
  const firstIndex = array.indexOf(targetElement)
  const lastIndex = firstIndex === array.lastIndexOf(targetElement) ? -1 : array.lastIndexOf(targetElement)
  return [firstIndex, lastIndex]
}

const getIndicesOfFirstAndLastTargetElementOneLiner = (array, targetElement) => [array.indexOf(targetElement), array.lastIndexOf(targetElement) === array.indexOf(targetElement) ? -1 : array.lastIndexOf(targetElement)]
