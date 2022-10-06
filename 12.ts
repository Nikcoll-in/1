//Дана строка типу "Page shows 50 results of 200". Створити функцію, яка повертає загальну кількість всіх результатів. В даному випадку 200.

let page = "Page shows 50 results of 200";
const n = page.split("of ")[1];
console.log(n);
// console.log("Total resalt: " + page.pop());
