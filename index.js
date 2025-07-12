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
        console.log("Segitiga:\n" + inkam.triangle(5));
    } catch (error) {
        console.log("Error di Segitiga:", error.message);
    }

    // Program: Perkalian Array
    try {
        console.log("Hasil Perkalian Array:", inkam.countArray([2, 3, 4]));
    } catch (error) {
        console.log("Error di countArray:", error.message);
    }

    // Program: Segitiga Terbalik
    try {
        console.log("Segitiga Terbalik:\n" + inkam.triangle2(5));
    } catch (error) {
        console.log("Error di triangle2:", error.message);
    }

    // Program: Perkalian Ganjil
    try {
        console.log("Hasil Perkalian Ganjil:", inkam.processNumber([1, 2, 3, 5]));
    } catch (error) {
        console.log("Error di processNumber:", error.message);
    }

    // Program: Tabel Perkalian
    try {
        console.log("Tabel Perkalian:\n" + inkam.cetakTabel(5));
    } catch (error) {
        console.log("Error di cetakTabel:", error.message);
    }

    // Program: Rentang Angka
    try {
        console.log("Rentang Angka:", inkam.buatRentang(1, 5));
    } catch (error) {
        console.log("Error di buatRentang:", error.message);
    }
}

taskInkam();

