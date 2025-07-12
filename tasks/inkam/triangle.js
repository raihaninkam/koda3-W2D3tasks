function triangle(num) {
    if (num <= 0 || typeof num !== "number") {
        throw new Error("Parameter harus bertipe data nomor dan harus nomor positif");
    }
    
    let result = "";
    let output = [];
    for (let i = 1; i <= num; i++) {
        result += i + " ";
        output.push(result);
    }
    return output.join("\n");
}
module.exports = triangle;
