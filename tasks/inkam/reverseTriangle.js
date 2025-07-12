function triangle2(num) {
    if (typeof num !== "number" || num <= 0) {
        throw new Error("Parameter harus bertipe data number dan positif");
    }
    let result = "";
    for (let i = 1; i <= num; i++) {
        let row = "";
        for (let j = i; j >= 1; j--) {
            row += j + " ";
        }
        result += (i < num) ? row + "\n" : row;
    }
    return result;
}
module.exports = triangle2;

