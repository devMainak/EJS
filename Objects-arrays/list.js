function arrayToList(arr)
{
    let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

function listToArray(list)
{
  let array = []
  for (let node = list; node; node = node.rest)
    {
      array.push(node.value)
    }
    
    return array
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, number)
{
  if (!list) return undefined
  else if (number === 0) return list.value
  else return nth(list.rest, number - 1)
}

console.log(arrayToList([10, 20]))

console.log(listToArray(arrayToList([10, 20, 30])))

console.log(prepend(10, prepend(20, null)))

console.log(nth(arrayToList([10, 20, 30]), 1))