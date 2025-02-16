console.log("The Value Should be Positive. If not, I'll Automaticaly Correct it Fo ya!");
console.log();
console.log( "Pick The Number 1 To 6");
const info = "  1: Fahrenheit to Celcius\n  2: Celcius to Fahrenheit\n  3: Celcius to Kelvin \n  4: Kelvin to Celcius \n  5: Fahrenheit to Kelvin \n  6: Kelvin to Fahrenheit ";
console.log(info);
const f = "Fahrenheit";
const c = "Celcius";
const k = "Kelvin";
let base = parseInt(prompt("pick: "));
let pick = Math.abs(base);

if  (pick == 1) {
    let value = parseFloat(prompt("Value Celcius: "));
    let fahrenheit = 9/5 * value + 32;
    console.log(fahrenheit, f);
}
else if (pick == 2) {
    let value = parseFloat(prompt("Value Farenheit: "));
    let celcius = (value-32) * 5/9;
    console.log(celcius, c);
}
else if (pick == 3) {
    let value = parseFloat(prompt("Value Celcius: "));
    let kelvin = value + 273.15;
    console.log(kelvin, k);
}
else if (pick == 4) {
    let value = parseFloat(prompt("Value Kelvin: "));
    let celcius = value - 273.15;
    console.log(celcius, c);
}
else if (pick == 5) {
    let value = parseFloat(prompt("Value Farenheit: "));
    let kelvin = (value-32) * 5/9 + 273.15;
    console.log(kelvin, k);
}
else if (pick == 6) {
    let value = parseFloat(prompt("Value Kelvin:"));
    let fahrenheit = (9/5 * (value-273.15)+32);
    console.log(fahrenheit, f);
}
else {
    console.log("Make sure put value 1 to 6")
}
