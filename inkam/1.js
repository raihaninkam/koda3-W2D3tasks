function triangle (num) {
    if (num <= 0 || typeof num !== "number") {
        console.log("Parameter harus bertipe data nomor dan harus nomor positif");
    } else {
        let baris = "";
        for (let i = 1; i <= num; i++) {
            baris += i + " ";
            console.log(baris);    
        }
    }
    
}
module.exports = triangle;

