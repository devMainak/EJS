// Recursions
function isEven(number) {
  if (number < 0) return isEven(-number);
  if (number === 0) return true;
  if (number === 1) return false;
  if (isEven(number - 2)) {
    return true;
  } else return false;
}

console.log(isEven(50));
// true

console.log(isEven(75));
// false

console.log(isEven(-1));
// false
