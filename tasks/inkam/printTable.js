function cetakTabel(n) {
    if (typeof n !== "number" || n <= 0) {
        throw new Error("Parameter harus bertipe data number dan positif");
    }
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${n} x ${i} = ${n * i}\n`;
    }
    return result;
}
module.exports = cetakTabel;

