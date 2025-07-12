function buatRentang (awal, akhir) {
    let result = [];
    for (let i = awal; i <= akhir; i++) {
        result.push(i);

    }
    return result.join(", ");
}
module.exports = buatRentang;
