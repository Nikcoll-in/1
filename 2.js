// 2. Дано число. Знайти суму цифр даного числа.       ПЕРЕПИСАТИ В ЦИКЛІ
function getSum(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum = sum + parseInt(str[i]);
  }
  return sum;
}
var str = "333";
console.log(getSum(str));
