/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Task Inkam
 */
const inkam = require("./tasks/inkam");

function taskInkam() {
    // Program: Segitiga
    try {
        const segitiga = inkam.triangle(5);
        console.log("Segitiga:", segitiga);
        
        // Test case failed (manual throw)
        const invalidInput = "bukan_angka";
        if (typeof invalidInput !== "number") {
            throw new TypeError("Input harus berupa angka");
        }
    } catch(error) {
        console.log("Error Segitiga:", error.message);
    }

    // Program: countArray
    try {
        const arr = [1, 2, 3, 4, 5];
        const count = inkam.countArray(arr);
        console.log("Count Array:", count);
        
        // Test case failed
        const invalidArr = "bukan_array";
        if (!Array.isArray(invalidArr)) {
            throw new TypeError("Input harus berupa array");
        }
    } catch(error) {
        console.log("Error countArray:", error.message);
    }

    // Program: Segitiga2
    try {
        const segitiga2 = inkam.triangle2(5);
        console.log("Segitiga2:", segitiga2);
        
        // Test case failed
        const invalidSize = -1;
        if (invalidSize <= 0) {
            throw new Error("Ukuran harus lebih besar dari 0");
        }
    } catch(error) {
        console.log("Error Segitiga2:", error.message);
    }

    // Program: ProcessNumber
    try {
        const numbers = [1, 2, 3, 4, 5];
        console.log("Process Number:", inkam.processNumber(numbers));
        
        // Test case failed
        const invalidNumbers = [1, "dua", 3];
        if (invalidNumbers.some(isNaN)) {
            throw new Error("Array harus berisi angka semua");
        }
    } catch(error) {
        console.log("Error ProcessNumber:", error.message);
    }

    // Program: Cetak Tabel
    try {
        const jumlah = 4;
        console.log("Tabel Perkalian:", inkam.cetakTabel(jumlah));
        
        // Test case failed
        const invalidJumlah = 4.5;
        if (!Number.isInteger(invalidJumlah)) {
            throw new Error("Input harus integer");
        }
    } catch(error) {
        console.log("Error Cetak Tabel:", error.message);
    }

    // Program: Buat rentang
    try {
        const rentang = inkam.buatRentang(1, 10);
        console.log("Rentang Angka:", rentang);
        
        // Test case failed
        const start = "a";
        const end = 10;
        if (typeof start !== "number" || typeof end !== "number") {
            throw new TypeError("Parameter harus angka");
        }
    } catch(error) {
        console.log("Error Buat Rentang:", error.message);
    }
}

// Panggil fungsi
taskInkam();

