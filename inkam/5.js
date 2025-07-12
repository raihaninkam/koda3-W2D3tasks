function cetakTabel (n) {
    if (typeof n !== "number") {
        console.log("Parameter harus bertipe data nomor dan harus nomor positif");
    }
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${n} x ${i} = ${n * i}\n`;
    }
    return result;
}
module.exports = cetakTabel;

