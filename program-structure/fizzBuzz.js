// fizzBuzz

for (let index = 1; index <= 100; index++) {
  let result = "";
  if (index % 3 === 0) result += "Fizz";
  if (index % 5 === 0) result += "Buzz";
  console.log(result || index);
}
