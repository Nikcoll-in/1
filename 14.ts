//Написати метод, який видаляє всі числа з масиву, які закінчуються на 0.

let arrOfNumbers = [1, 10, 3, 100, 5, 90, 0];
function filterArrByLastSymbol(array: number[]) {
  return array.filter((number) => !String(number).endsWith("0"));
}

console.log(filterArrByLastSymbol(arrOfNumbers));
