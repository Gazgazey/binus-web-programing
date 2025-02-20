while (true) {
    console.log();
    let value = parseInt(prompt("Put Value: "));

    if (value % 2 === 0) {
        console.log("Even");
    } else if (value % 2 === 1){
        console.log("Odd");
    } else {
        console.log("You did not use number");
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
