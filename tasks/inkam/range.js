function buatRentang(awal, akhir) {
    if (typeof awal !== "number" || typeof akhir !== "number") {
        throw new Error("Parameter harus bertipe data number");
    }
    let result = [];
    for (let i = awal; i <= akhir; i++) {
        result.push(i);
    }
    return result.join(", ");
}
module.exports = buatRentang;
