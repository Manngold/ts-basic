type Type = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

const calculate = (type: Type, num1: number, num2: number): number | never => {
  if (type === 'add') {
    return num1 + num2;
  } else if (type === 'substract') {
    return num1 - num2;
  } else if (type === 'multiply') {
    return num1 * num2;
  } else if (type === 'divide') {
    return num1 / num2;
  } else if (type === 'remainder') {
    return num1 % num2;
  } else {
    throw new Error('Exception error');
  }
};

console.log(calculate('add', 1, 2)); // 3
console.log(calculate('substract', 1, 2)); // -1
console.log(calculate('multiply', 1, 2)); // 2
console.log(calculate('divide', 1, 2)); // 0.5
console.log(calculate('remainder', 1, 2)); // 1
