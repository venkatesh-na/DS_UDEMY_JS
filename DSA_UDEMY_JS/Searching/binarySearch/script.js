//Binary Search
//only works on sorted array
//faster than linear search

function binarySearch(arr,value){ //time - O(logn)
    let left  = 0,
        end = arr.length-1,
        middle = Math.floor((left + end)/2)
    while(arr[middle] !== value && left <= end){
        if(value < arr[middle]) end = middle - 1
        else left = middle + 1
        middle = Math.floor((left + end)/2)
    }
    return arr[middle] == value ? middle : -1
}

//log2n - n = 8  2^3 = 8 - need 3 step to find 8 - worst case
//[1,2,3,4,5,6,7,8]
//[6,7,8]
//[8]-

//we size is 32 - we need 5 step
//2^5 = 32

function naiveSearch(long,short)
{
    let count = 0
    for(let i = 0; i<long.length; i++){
        let isMatch = true
        for(let j = 0; j<short.length; j++){
            if(short[j] != long[i+j]){
                isMatch = false
                break;
            }
        }
        if(isMatch) count++;
    }
    return count;
}
console.log(naiveSearch("lorie loled","lol")) //1
console.log(naiveSearch("mgmgmg","mg")) //3

