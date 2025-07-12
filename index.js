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
    // Success
    let segitiga = inkam.triangle(5);
    console.log(segitiga);

    // Failed
    try {
        const result = inkam.triangle("s");
        console.log(result);
    } catch(error) {
        console.log(error.message);
    }

    // Program: countArray
    // Success
    const arr = [1,2,3,4,5];
    const count = inkam.countArray(arr);
    console.log(count);

    // Failed
    try {
        const result = inkam.countArray("s");
        console.log(result);
    } catch(error) {
        console.log(error.message);
    }

    // Program: Segitiga2
    // Success
    const segitiga2 = inkam.triangle2(5);
    console.log(segitiga2);

    // Failed
    try {
        const result = inkam.triangle2("s");
        console.log(result);
    } catch(error) {
        console.log(error.message);
    }

    // Program: ProcessNumber
    // Success
    const number = [1,2,3,4,5];
    console.log(inkam.processNumber(number));

    // Failed
    try {
        const result = inkam.processNumber("s");
        console.log(result);
    } catch(error) {
        console.log(error.message);
    }

    // Program: Cetak Tabel
    // Success
    const jumlah = 4;
    console.log(inkam.cetakTabel(jumlah));

    // Failed
    try {
        const result = inkam.cetakTabel("s");
        console.log(result);
    } catch(error) {
        console.log(error.message);
    }

    // Program: Buat rentang
    // Success
    const rentang = inkam.buatRentang(1,10);
    console.log(rentang);

    // Failed
    try {
        const result = inkam.buatRentang("s");
        console.log(result);
    } catch(error) {
        console.log(error.message);
    }
}  
// Panggil fungsi
taskInkam();
