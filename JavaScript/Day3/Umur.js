console.log("The Value Should be Positive. If not, I'll Automaticaly Correct it Fo ya!")
console.log();
const id = "Years Old";
let age = parseInt(prompt("Put Your Age: "));
let a = Math.abs(age);
console.log(a, id)

    if ( ( a >= 0 ) && ( a <= 1 ) ) {
        console.log("Bayi");
    } else if ( ( a >= 2 ) && ( a <= 3 ) ) {
        console.log("Batita");
    } else if ( ( a >= 4 ) && ( a <= 5 ) ) {
        console.log("Balita");
    } else if ( ( a >= 6 ) && ( a <= 12 ) ) {
        console.log("Anak-Anak");
    } else if ( ( a >= 13 ) && ( a <= 17 ) ) {
        console.log("Remaja");
    } else if ( ( a >= 18 ) && ( a <= 21 ) ) {
        console.log("ABG");
    } else if ( ( a >= 22 ) && ( a <= 30 ) ) {
        console.log("Pra Dewasa");
    } else if ( ( a >= 31 ) && ( a <= 50 ) ) {
        console.log("Dewasa");
    } else if ( ( a >= 51 ) && ( a <= 70 ) ) {
        console.log("Pra Lansia");
    } else  {
        console.log("Lansia");
    }
