// Написати функцію, яка приймає емейл наприклад katya@gmail.com та повертає katya(унікальну назву емейлу).
var getNameByEmail = function (email) { var _a; return ((_a = email.split("@")) === null || _a === void 0 ? void 0 : _a[0]) || "Name is empty"; };
console.log(getNameByEmail("katya@gmail.com"));
