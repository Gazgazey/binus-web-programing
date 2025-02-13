//Formula of Cylinder Volume
let str_cylinder_volume_name = prompt("Name your Cylinder Volume: ");
let id = "cm3";
const phi = 3.14;

//Inputing & Computing
let int_r = parseInt(prompt("Put r Value: "));
let int_height = parseInt(prompt("Put Height Value: "));
let r_square = int_r * int_r; 

console.log(str_cylinder_volume_name);
console.log(phi*r_square*int_height, id);
