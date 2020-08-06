const twoSum = (arr, k) => arr.some(item => arr.includes(k - item))

console.log(twoSum([4, 7, 1 , -3, 2], 5))