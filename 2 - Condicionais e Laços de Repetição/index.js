const fizzBuzz = function (n) {
  const result = []; // array para guardar o resultado

  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i.toString());
  }
  return result;
};

// Mais exemplos de como implementar FizzBuzz em JavaScript e em outras linguagens aqui: https://rosettacode.org/wiki/FizzBuzz