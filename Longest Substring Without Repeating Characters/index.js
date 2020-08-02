const lengthOfLongestSubstring = str => {
	let currentSubstringLength = 1
  let longestSubstringLength = 1
	for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) currentSubstringLength += 1
    else {
    	if (currentSubstringLength > longestSubstringLength) longestSubstringLength = currentSubstringLength
      currentSubstringLength = 1
    }
  }
  return longestSubstringLength
}

console.log(lengthOfLongestSubstring('abrkaabcdefghijjxxx')) // 10