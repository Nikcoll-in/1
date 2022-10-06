//Створити двохвимірний масив 2на2 та заповнити рандомними числами.
let cols = 10;
let rows = 10;
let deep = 10;
let front;

front = new Array(cols);
for (var x = 0; x < cols; x++) {
  front[x] = [];
  for (var y = 0; y < rows; y++) 
  
  for (var z = 0; z < rows; z++) {
    front[x][y][z] = Math.floor(Math.random() * 100);
  }
}
console.table(front);
