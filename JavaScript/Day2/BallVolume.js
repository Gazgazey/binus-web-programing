// The formula volume of ball is : 4/3 * 3.14 * r^3
let str_ball_volume_name = prompt("Name your Rectangle volume: ");
let id = "cm3";
const phi = 3.14;
let a = 4/3;

// Inputing & Computing Number
let int_r = parseInt(prompt("Put r value: "));
let r_square = int_r * int_r * int_r;

console.log(str_ball_volume_name);
console.log(a*phi*r_square, id);

// Question : what's Math.pow, let a (4/3), 
