function processNumber (number) {

    const ganjil = number.filter((x) => x % 2 !== 0);
    if (ganjil.length === 0) return 1;
   
    let result = 1;
    for ( let i = 0; i < ganjil.length; i++) {
        result *= ganjil[i];
        
    }
    return result;
}
module.exports = processNumber;

