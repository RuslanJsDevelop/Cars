const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
      return 1;
    } else if (month >= 4 && month <= 6) {
      return 2;
    } else if (month >= 7 && month <= 9) {
      return 3;
    } else {
      return 4;
    }
  };
  
  // Пример использования
  console.log(quarterOf(2)); // Вывод: 1
  console.log(quarterOf(6)); // Вывод: 2
  console.log(quarterOf(11)); // Вывод: 4