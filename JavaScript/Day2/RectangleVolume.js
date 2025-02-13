// Menginput String untuk menandai
let str_nama_rectangle = prompt("Name your Rectangle volume: ");
let id = "cm3";

// Menginput nilai panjang
let int_lenght = parseInt(prompt("Put Lenght value: "));

// Menginput nilai tinggi
let int_height = parseFloat(prompt("Put Height value: "));

// Menginput nilai lebar
let int_widht = parseFloat(prompt("Put Width Value: "))

console.log(str_nama_rectangle);
console.log(int_lenght*int_height*int_widht, id);
