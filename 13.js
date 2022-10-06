//Створити двохвимірний масив 2на2 та заповнити рандомними числами.
var cols = 2;
var rows = 2;
var front;
front = new Array(cols);
for (var x = 0; x < cols; x++) {
    front[x] = [];
    for (var y = 0; y < rows; y++) {
        front[x][y] = Math.floor(Math.random() * 100);
    }
}
console.table(front);
