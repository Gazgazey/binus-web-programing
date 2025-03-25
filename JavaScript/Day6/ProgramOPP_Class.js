class Mahasiswa {
    constructor(nama = "None", nilai = "None") {
        this._nama = nama;
        this._nilai = nilai;
    }

    // Setter untuk Nama
    set nama(namaBaru) {
        this._nama = namaBaru;
    }

    // Setter untuk Nilai
    set nilai(nilaiBaru) {
        this._nilai = nilaiBaru;
    }

    // Getter untuk Nama
    get nama() {
        return this._nama;
    }

    // Getter untuk Nilai
    get nilai() {
        return this._nilai;
    }

    tampilkanData() {
        console.log("\nNama:", this._nama, "\nNilai:", this._nilai, "\n");
    }

    hapusData() {
        this._nama = "None";
        this._nilai = "None";
    }
}

// Recreate
let mahasiswa = new Mahasiswa();

while (true) {
    console.log("\n===== Program OOP =====");
    console.log("1. Mendeklarasikan Objek");
    console.log("2. Menampilkan Objek");
    console.log("3. Merubah Nilai Objek");
    console.log("4. Menghapus Objek");
    console.log("5. Keluar Dari Program");

    let pilihan = prompt("Masukkan Pilihan Berupa Angka (1/2/3/4/5): ");

    if (pilihan == "1") {
        let nama = prompt("Masukkan Namamu: ");
        let nilai = prompt("Masukkan Nilaimu: ");
        mahasiswa.nama = nama;  // Menggunakan setter
        mahasiswa.nilai = nilai;  // Menggunakan setter
        console.log("Data Berhasil Ditambahkan");

    } else if (pilihan === "2") {
        mahasiswa.tampilkanData();

    } else if (pilihan === "3") {
        let properti = prompt("Apa yang ingin diubah (Nama/Nilai): ");
        if (properti.toLowerCase() === "nama") {
            let namaBaru = prompt("Masukkan Nama: ");
            mahasiswa.nama = namaBaru;  // Menggunakan setter
            console.log("Data Nama Berhasil Dirubah");
        } else if (properti.toLowerCase() === "nilai") {
            let nilaiBaru = prompt("Masukkan Nilai: ");
            mahasiswa.nilai = nilaiBaru;  // Menggunakan setter
            console.log("Data Nilai Berhasil Dirubah");
        } else {
            console.log("Properti tidak valid!");
        }

    } else if (pilihan === "4") {
        mahasiswa.hapusData();
        console.log("Data Berhasil Dihapus");

    } else if (pilihan === "5") {
        console.log("Terima Kasih Sudah Menggunakan Program Saya");
        break

    } else {
        console.log("Pilihan tidak valid! Silakan masukkan angka 1-5.");
    }
}
