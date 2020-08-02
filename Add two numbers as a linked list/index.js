const list1 = {
  head: {
    value: 2,
    next: {
      value: 4,
      next: {
        value: 3,
        next: null
      }
    }
  }
}

// const list2 = {
//   head: {
//     value: 5,
//     next: {
//       value: 6,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// }

// const arr1 = []
// const arr2 = []

const getValuesForArr = obj => {
  let res = ''

  console.log('res', res)
  return () => {
    if (obj.next !== null) {
      res += obj.val
      getValuesForArr(obj.next)
    } else return res
  }
}

console.log(getValuesForArr(list1))

// const numberino = `${getValuesForArr(list1.head) += getValuesForArr(list1.head)}`

// const getValuesForArr1 = obj => {
//   arr1.unshift(obj.value)
//   if (obj.next !== null) getValuesForArr1(obj.next)
// }

// const getValuesForArr2 = obj => {
//   arr2.unshift(obj.value)
//   if (obj.next !== null) getValuesForArr2(obj.next)
// }

// getValuesForArr1(list1.head)
// getValuesForArr2(list2.head)

// const arrToNum = arr => Number(arr.join().replace(/,/g, ''))

// const res = arrToNum(arr1) + arrToNum(arr2)

// console.log(res)