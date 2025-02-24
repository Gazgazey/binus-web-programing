function displayHeader() {
    console.log("|-------------------|");
    console.log("|     Bagas adi     |");
    console.log("|-------------------|");
}

function humanInput(promptMessage) { //default codename is (getInput).
    return prompt(promptMessage);
}

function calculate(value1, value2) {
    
       if  (humaninput == "-") { //minus
            return value1 - value2;
            console.log(minus);
        }
        else if (humaninput == "+") { //plus
            console.log("choosing + program in menu");
            return value1 + value2;
            console.log(plus);
        }
        else if (humaninput == "*") { //multiple
            return value1 * value2;
            console.log(multiple);
        }
        else if (humaninput == "/") { //divide
            return value2 === 0 ? "Dividing with 0 is not allowed." : value1 / value2;
            console.log(divide);
        }
        else if (humaninput == "%") { //sisa bagi
            return value2 === 0 ? "Dividing with 0 is not allowed." : value1 % value2;
            console.log(divide);
        }
        else if (humaninput === "stop") { //abort program
            console.log("Program has been Stopped");
        }
        else {
            console.log("Command Invalid");
        }
    
}

function calculator() {
    displayHeader();
    while (true) {
        let menu = getInput("Masukkan Menu(+|-|/|*|%|stop):");
        if (menu === "stop") {
            console.log("Program has been Dismissed.");
            break;
        }

        if (!["+", "-", "*", "/", "%"].includes(menu)) {
            console.log("Value invalid, choose the right command.");
            continue;
        }

        let value1 = parseFloat(getInput("Masukkan Nilai 1:"));
        let value2 = parseFloat(getInput("Masukkan Nilai 2:"));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Input value should be a number.");
            continue;
        }

        let result = calculate(menu, value1, value2);
        console.log(`Hasil ${menu === "+" ? "Penjumlahan" : menu === "-" ? "Pengurangan" : menu === "*" ? "Perkalian" : menu === "/" ? "Pembagian" : "Modulus"} ${num1} ${menu} ${num2} adalah ${result}`);
    }
}

calculator();
