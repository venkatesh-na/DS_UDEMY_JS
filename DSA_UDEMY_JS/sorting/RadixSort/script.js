//Radix Sort
//finds digits at ith(from back) position(without string)
function getDigitCount(num,i){
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10
}
// console.log(getDigitCount(1234,0)) //3

//gets the length of digit(without string)
function digitCount(num){
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
// console.log(digitCount(1245)) //4

//return which item has max length in array of integer
function mostDigits(nums){
    let maxCount = 0
    for(let i = 0; i<nums.length; i++){
        maxCount = Math.max(maxCount,digitCount(nums[i]))
    }
    return maxCount
}
// console.log(mostDigits([1,23,45,45,121212])) //6

function radixSort(nums)
{
    let maxDigitCount = mostDigits(nums)
    for(let k = 0; k<maxDigitCount; k++){
        //creates a array of length 10 and each array is empty
        let digitBuckets = Array.from({ length: 10 },()=>[])
        for(let i = 0; i<nums.length; i++){
           let digit =  getDigitCount(nums[i],k) 
           digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums;
}
console.log(radixSort([23,345,5467,12,2345,9852]))