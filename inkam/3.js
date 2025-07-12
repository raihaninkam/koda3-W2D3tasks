function triangle2 (num) {
    if (typeof num !== "number") {
        console.log("Parameter harus bertipe data nomor dan harus nomor positif");
    } 
    let result = "";
    for (let i = 1; i<= num; i++) {
        let row = "";
            
        for (let j = i; j >= 1; j-- ) {
            row += j + " ";
        }

        if (i < num) {
            result += row + "\n";
        } else {
            result += row;
        }
    }
    return result;
}
module.exports = triangle2;
