function countArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Parameter harus berupa array");
    }
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}
module.exports = countArray;
