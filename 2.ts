// 2. Дано число. Знайти суму цифр даного числа.       ПЕРЕПИСАТИ В ЦИКЛІ

function getSum(str: any) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = sum + parseInt(str[i]);
  }
  return sum;
}
let str: any = "3333";
console.log(getSum(str));
