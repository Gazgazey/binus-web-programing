console.log("This is The Diagram of Triangle code name! ")
console.log();
console.log();
console.log("                 /\\");
console.log("       Side A > /  \\ < Side B");
console.log("               /____\\");
console.log("                 ^");
console.log("               Side C");
console.log();
console.log();
console.log("There's 5 kind of Triangle in this case:\n  -Sama Sisi\n  -Sama Kaki\n  -Segitiga Sembarang\n  -Segitiga Siku-Siku\n  -Bukan Segitiga");



while (true) {

console.log();
let sideA = parseInt(prompt("Put Side A: "));
let sideB = parseInt(prompt("Put Side B: "));
let sideC = parseInt(prompt("Put Side C: "));
console.log();

if (sideA + sideB >= sideC && sideB + sideC >= sideA && sideA + sideC >= sideB) {
    if (sideA == sideB && sideB == sideC && sideA == sideC) {
        console.log("Equilateral Triangle (segitiga sama sisi)");
    } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
        console.log("Isosceles Triangle (segitiga sama kaki)");
    } else if (sideA ** 2 + sideB ** 2 == sideC ** 2 || sideB ** 2 + sideC ** 2 == sideA ** 2 || sideA ** 2 + sideC ** 2 == sideB ** 2) {
        console.log("Right Triangle (segitiga siku-siku)");
    } else  {
        console.log("Random Triangle (segitiga sembarang)");
    }
} else {
    console.log("Your input value of side A,B,C not determine any kind of Triangle!");
    alert("Your input value of side A,B,C not determine any kind of Triangle!");
}

    let choice = prompt("Do you want to continue? (yes/no)\n: ").toLowerCase();

    if (choice === "no") {
        console.log("Program Dismissed");
        break;
    } else if (choice !== "yes") {
        console.log("You didn't choose (yes/no), so I dismissed the program.");
        break;
    }
}
