function NullSort(arr) {
    let result = [];
    let null_count = 0;

    for (let num of arr) {
        if (num == 0) {
            null_count++;
        } else {
            result.push(num);
        }
    }
    
    for (let i=0; i < null_count; i++) {
        result.push(0);
    }

    return result;
}

console.log(NullSort([0,1,2,3,4,0,2,6,0]));