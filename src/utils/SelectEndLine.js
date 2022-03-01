export const selectEndLine = (exp) => {
  const lastNumber = exp % 10;
  switch (true) {
    case exp > 50:
      return "- ОШИБКА ВВОДА!";
    case exp === 1 || (lastNumber === 1 && exp !== 11):
      return "год";
    case (exp > 0 && exp < 5) || (exp > 20 && lastNumber > 1 && lastNumber < 5):
      return "года";
    default:
      return "лет";
  }
};
