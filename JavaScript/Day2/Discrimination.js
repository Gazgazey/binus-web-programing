function calculateDiscriminant(a, b, c) {
    return b * b - 4 * a * c;
}

// 
let a = parseInt (prompt("Put a Value: "));
let b = parseInt(prompt("Put b Value: "));
let c = parseInt(prompt("Put c Value: "));
const discriminant = calculateDiscriminant(a, b, c);
console.log(`The discriminant is: ${discriminant}`);
