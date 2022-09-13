// Згенерувати масив рандомних чисел рандомної довжини.
let arr = [];
for (let i = 0, t = 20; i < t; i++) {
  arr.push(Math.round(Math.random() * t));
}
console.log(arr);
