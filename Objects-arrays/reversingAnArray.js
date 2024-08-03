// The first function
function reverseArray(arr)
{
    let reversedArray = [];
    for (let i = 0; i < arr.length; i++)
    {
        reversedArray.unshift(arr[i])
    }

    return reversedArray
}

// The second function (swapping in place)
function reverseArrayInPlace(arr)
{
    for (let i = 0; i < Math.floor(arr.length / 2); i++)
    {
        let old = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = old
    }

    return arr
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(myArray);

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);