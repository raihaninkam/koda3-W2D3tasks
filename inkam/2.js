function countArray (arr) {
    if (!Array.isArray(arr)) {
        console.log("Parameter harus berupa tipe data Array");
    } else {
        let result = 1;
        for (let i = 0; i < arr.length; i++) {
            result *= arr[i];
            
        }
        return result;
    }
}
module.exports = countArray;
