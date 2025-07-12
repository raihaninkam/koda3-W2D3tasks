function processNumber(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Parameter harus berupa array");
    }
    
    const ganjil = numbers.filter(x => x % 2 !== 0);
    if (ganjil.length === 0) return 1;
    
    return ganjil.reduce((result, num) => result * num, 1);
}
module.exports = processNumber;


