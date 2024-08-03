// This function gets a range of elements between the args
function range(start, end, step = 1)
{
    const elements = []
    if (step < 0)
    {
        for (let i = start; i >= end; i += step)
        {
            
            elements.push(i)
        } 
    } else {
        for (let i = start; i <= end; i += step)
        {
        elements.push(i)
        }
    }

    return elements
}

// This function takes an array of numbers and returns the sum of them
function sum(numbers)
{
    let sumOfNums = 0
    for (let num of numbers)
    {
        sumOfNums += num
    }

    return sumOfNums
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1))
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)))
// → 55