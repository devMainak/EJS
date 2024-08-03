let arrays = [[1, 2, 3], [4, 5], [6]]

const flattendArray = arrays.reduce((acc, curr) => acc = [...acc, ...curr], [])

console.log(flattendArray)