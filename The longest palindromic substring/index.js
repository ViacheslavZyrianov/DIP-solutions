const theLongestPalindromicSubstring = str => {
  const count = (str, symbol) => str.split(symbol).length - 1
  const resverseSting = str => str.split('').reverse().join().replace(/,/g, '')

  let theLongestPalindromicSubstring = ''
  str.split('').forEach((letter, i) => {
    if (count(str, letter) > 1) {
      const tempSubstring = str.slice(i, str.length - resverseSting(str).indexOf(letter))
      tempTheLongestPalindromicSubstring = tempSubstring === resverseSting(tempSubstring) ? tempSubstring : ''
      if (theLongestPalindromicSubstring.length < tempTheLongestPalindromicSubstring.length) theLongestPalindromicSubstring = tempTheLongestPalindromicSubstring
    }
  })
  return theLongestPalindromicSubstring
}

['tracecars', 'banana', 'million', 'bananakopopopo'].forEach(testVal => console.log(theLongestPalindromicSubstring(testVal)))
