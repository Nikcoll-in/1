// Написати функцію, яка приймає емейл наприклад katya@gmail.com та повертає katya(унікальну назву емейлу).

const getNameByEmail = (email: string) => email.split("@")?.[0] || "Name is empty";
console.log(getNameByEmail("katya@gmail.com"));
