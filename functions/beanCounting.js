// counting chars
const countChar = (string, char) => {
    let charCount = 0
    for (let i = 0; i < string.length; i++)
    {
        if (string[i] === char)
        {
            charCount++
        }
    }
    return charCount
}

// counting B's using countChar
const countBs = (string) => {
    return countChar(string, "B")
} 

console.log(countBs("BOB"))
// 2

console.log(countChar("kakkerlak", "k"))
// 4