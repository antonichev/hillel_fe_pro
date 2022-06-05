export const add = (...numbers) => {
  let result = 0;

  for (let num of numbers) {
    result += num;
  }

  return result;
};

export const subtract = (...numbers) => {
  let result = 0;

  for (let num of numbers) {
    result -= num;
  }

  return result;
};

export const multiply = (...numbers) => {
  let result;

  for (let num of numbers) {
    if (result === undefined) {
      result = num;
    } else {
      result *= num;
    }
  }

  return result;
};

export const divide = (...numbers) => {
  let result;

  for (let num of numbers) {
    if (result === undefined) {
      result = num;
    } else {
      result /= num;
    }
  }

  return result;
};
