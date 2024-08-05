function every(array, test)
{
    const trueCount = []

    for (let i = 0; i < array.length; i++)
    {
    
        if (test(array[i]))
        {
            trueCount.push(array[i])
        } 
    }


    if (trueCount.length === array.length)
    {
        return true 
    } else {
        return false
    }
}

console.log(every([1, 3, 5], n => n < 10))

console.log(every([2, 4, 16], n => n < 10))