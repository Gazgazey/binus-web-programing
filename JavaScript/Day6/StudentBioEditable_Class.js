//Unfinished (Reworks needed in "Back Function")
//------------------------------------------------------------------------
//Vicky
class StudentVic {
    constructor(ClassRoomVic = "None", AddressVic = "None", HobbysVic = "None") {
        //vicky
        this._ClassRoomVic = ClassRoomVic;
        this._AddressVic = AddressVic;
        this._HobbysVic = HobbysVic;
    }

    // Setter vicky
    set ClassRoomVic(ClassRoomVicInputed) {
        this._ClassRoomVic = ClassRoomVicInputed;
    }
    set AddressVic(AddressVicInputed) {
        this._AddressVic = AddressVicInputed;
    }
    set HobbysVic(HobbysVicInputed) {
        this._HobbysVic = HobbysVicInputed;
    }

    // Getter vicky
    get ClassRoomVic() {
        return this._ClassRoomVic;
    }
    get AddressVic() {
        return this._AddressVic;
    }
    get HobbysVic() {                                   
        return this._HobbysVic;
    }

    printStudentVic() {
        console.log("\nClassRoom :", this._ClassRoomVic, "\nAddress   :", this._AddressVic, "\nHobbys    :", this._HobbysVic, "\n",);
    }
    hapusData() {
        this._nama = "None";
        this._nilai = "None";
    }
    
}


//------------------------------------------------------------------------
//Jennifer
class StudentJess {
    constructor(ClassRoomJess = "None", AddressJess = "None", HobbysJess = "None") {
        //vicky
        this._ClassRoomJess = ClassRoomJess;
        this._AddressJess = AddressJess;
        this._HobbysJess = HobbysJess;
    }

    // Setter Jess
    set ClassRoomJess(ClassRoomJessInputed) {
        this._ClassRoomJess = ClassRoomJessInputed;
    }
    set AddressJess(AddressJessInputed) {
        this._AddressJess = AddressJessInputed;
    }
    set HobbysJess(HobbysJessInputed) {
        this._HobbysJess = HobbysJessInputed;
    }

    // Getter Jess
    get ClassRoomJess() {
        return this._ClassRoomJess;
    }
    get AddressJess() {
        return this._AddressJess;
    }
    get HobbysJess() {                                   
        return this._HobbysJess;
    }
    printStudentJess() {
        console.log("\nClassRoom :", this._ClassRoomJess, "\nAddress   :", this._AddressJess, "\nHobbys    :", this._HobbysJess, "\n",);
    }
    hapusData() {
        this._nama = "None";
        this._nilai = "None";
    }
    
}


//------------------------------------------------------------------------
//Jennifer
class StudentJenn {
    constructor(ClassRoomJenn = "None", AddressJenn = "None", HobbysJenn = "None") {
        //vicky
        this._ClassRoomJenn = ClassRoomJenn;
        this._AddressJenn = AddressJenn;
        this._HobbysJenn = HobbysJenn;
    }

    // Setter Jenn
    set ClassRoomJenn(ClassRoomJennInputed) {
        this._ClassRoomJenn = ClassRoomJennInputed;
    }
    set AddressJenn(AddressJennInputed) {
        this._AddressJenn = AddressJennInputed;
    }
    set HobbysJenn(HobbysJennInputed) {
        this._HobbysJenn = HobbysJennInputed;
    }

    // Getter Jenn
    get ClassRoomJenn() {
        return this._ClassRoomJenn;
    }
    get AddressJenn() {
        return this._AddressJenn;
    }
    get HobbysJenn() {                                   
        return this._HobbysJenn;
    }
    printStudentJenn() {
        console.log("\nClassRoom :", this._ClassRoomJenn, "\nAddress   :", this._AddressJenn, "\nHobbys    :", this._HobbysJenn, "\n",);
    }
    hapusData() {
        this._nama = "None";
        this._nilai = "None";
    }
    
}


let studentVic = new StudentVic();
let studentJess = new StudentJess();
let studentJenn = new StudentJenn();

while (true) {
    console.log("\n    New Student   ");
    console.log("-------------------\n");
    console.log("Vic  = Vicky Jefferson");
    console.log("Jess = Jessie Glance");
    console.log("Jenn = Jennifer Collins");
    console.log("Check (Check Student Data)");
    console.log("\n");
    console.log("  X   (Exit)");
    console.log();

    let pilihan = prompt("Choose New Transfer Student: ").toLowerCase();

    if (pilihan === "vic") {
        console.log();
        console.log("Vicky Jefferson");
        console.log();
        studentVic.printStudentVic();
        console.log("You can Update the Bio");
        let edit = prompt("Vicky Bio is Editable (ClassRoom/Address/Hobbys): ");
        if (edit.toLowerCase() === "classroom") {
            let ClassRoomVicInputed = prompt("Insert ClassRoom: ");
            studentVic.ClassRoomVic = ClassRoomVicInputed;
            console.log("Vicky bio has been Updated!");
        } else if (edit.toLowerCase() === "address") {
            let AddressVicInputed = prompt("Insert Address: ");
            studentVic.AddressVic = AddressVicInputed;
            console.log("Vicky bio has been Updated!");
        } else if (edit.toLowerCase() === "hobbys") {
            let HobbysVicInputed = prompt("Insert Hobbys: ");
            studentVic.HobbysVic = HobbysVicInputed;
            console.log("Vicky bio has been Updated!");
        } else {
            console.log("Command Not available");
        }

    } else if (pilihan === "jess") {
        console.log();
        console.log("Jessie Glance");
        console.log();
        studentJess.printStudentJess();
        console.log("You can Update the Bio");
        let edit = prompt("Jessie Bio is Editable (ClassRoom/Address/Hobbys): ");
        if (edit.toLowerCase() === "classroom") {
            let ClassRoomJessInputed = prompt("Insert ClassRoom: ");
            studentJess.ClassRoomJess = ClassRoomJessInputed;
            console.log("Jessie bio has been Updated!");
        } else if (edit.toLowerCase() === "address") {
            let AddressJessInputed = prompt("Insert Address: ");
            studentJess.AddressJess = AddressJessInputed;
            console.log("Jessie bio has been Updated!");
        } else if (edit.toLowerCase() === "hobbys") {
            let HobbysJessInputed = prompt("Insert Hobbys: ");
            studentJess.HobbysJess = HobbysJessInputed;
            console.log("Jessie bio has been Updated!");
        } else {
            console.log("Command Not available");
        }

    } else if (pilihan === "jenn") {
        console.log();
        console.log("Jennifer Collins");
        console.log();
        studentJenn.printStudentJenn();
        console.log("You can Update the Bio");
        let edit = prompt("Jennifer Bio is Editable (ClassRoom/Address/Hobbys): ");
        if (edit.toLowerCase() === "classroom") {
            let ClassRoomJennInputed = prompt("Insert ClassRoom: ");
            studentJenn.ClassRoomJenn = ClassRoomJennInputed;
            console.log("Jennifer bio has been Updated!");
        } else if (edit.toLowerCase() === "address") {
            let AddressJennInputed = prompt("Insert Address: ");
            studentJenn.AddressJenn = AddressJennInputed;
            console.log("Jennifer bio has been Updated!");
        } else if (edit.toLowerCase() === "hobbys") {
            let HobbysJennInputed = prompt("Insert Hobbys: ");
            studentJenn.HobbysJenn = HobbysJennInputed;
            console.log("Jennifer bio has been Updated!");
        } else {
            console.log("Command Not available");
        }
    
    } else if (pilihan === "4") {
        mahasiswa.hapusData();
        console.log("Data Berhasil Dihapus");

    } else if (pilihan === "x") {
        console.log("Terima Kasih Sudah Menggunakan Program Saya");
        break //process.exit();  <-- Big Question Yow!!!
        
    } else if (pilihan === "check") {
        let pickStudent = prompt("\nVicky\nJessie\nJennifer\n: ").toLowerCase();
        if ((pickStudent === "vic") || (pickStudent === "vicky")) {
            studentVic.printStudentVic();
        } else if ((pickStudent === "jess") || (pickStudent === "jessie")) {
            studentJess.printStudentJess();
        } else if ((pickStudent === "jenn") || (pickStudent === "jennifer")) {
            studentJenn.printStudentJenn();
        } else {
            console.log("Please Re-Check Command!");
        }
    } else {
        console.log("Wrong Menu Input");
    }
}
