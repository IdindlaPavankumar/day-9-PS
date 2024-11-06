// let arr=[1,4,3,5,6] find the missing prime in the array
let arr = [1, 4, 3, 5, 6]
let min = arr[0]
let max = arr[0]


for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(  "Min value is : "+min,"Max value is : " +  max)
let prime = []
for (j = min; j < max; j++) {
    let isPrime = true;
    if (j < 2) continue;
    for (k = 2; k <=Math.sqrt (j); k++) {
        if (j % k === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && !arr.includes(j)) {
        prime.push(j)

    }
}
if(prime.length>0){
    console.log("missing prime is :",prime[0])
}
else{
    console.log("No missing prime Number")
}
