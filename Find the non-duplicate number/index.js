const findUniqueFilter = arr => arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))[0]

console.log(findUniqueFilter([4,6,5,2,3,5,6,4,3]))