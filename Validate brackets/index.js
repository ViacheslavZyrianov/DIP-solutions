const validateBrackets = brackets => {
  if (brackets === '') return true
  if (brackets.length % 2 !== 0) return false

  const bracketList = ['(', ')', '{', '}', '[', ']']

  const count = (str, symbol) => str.split(symbol).length - 1

  let openedBracketsCount = 0
  let closedBracketsCount = 0
  for (let i = 0; i < bracketList.length; i++) {
    if (i % 2 === 0) openedBracketsCount += count(brackets, bracketList[i])
    else closedBracketsCount += count(brackets, bracketList[i])
  }

  if (openedBracketsCount !== closedBracketsCount) return false

  brackets = brackets.split('')

  let counter = 0
  const removePairs = () => {
    if (counter > brackets.length / 2) return

    const openingBracket = bracketList.find(bracket => bracket === brackets[counter])
    const closingBracket = bracketList[bracketList.indexOf(openingBracket) + 1]
    if (brackets[counter] === openingBracket && brackets[counter + 1] === closingBracket) {
      brackets.splice(counter, 2)
      counter -= 1
    } else counter += 1
    removePairs()
  }

  removePairs()

  return brackets.length === 0
}

['({)', '({})', '({])', '((){[]()})'].forEach(testVal => console.log(validateBrackets(testVal)))