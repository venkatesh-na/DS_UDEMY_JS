//Multiple pointer
/*
creating pointer or values than corresponds to an index or positionand move towards the beginning , end  or middle based on the condition
very efficient for solving problem with minimal space complexity as well

*/
//Q)two sum problem (accepts sorted array) return pair which sum is 0

//sumZero([-3,-2,-1,0,1,2,3])

function sumZero(arr) //time - O(N^2) space - O(1)
{
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == 0){
                return [arr[i],arr[j]]
            }
        }
    }
}
console.log(sumZero([-3,-2,-1,0,1,2,3]))

//Refactor
function sumZeroOpt(arr)
{
    //time - O(N) space - O(1)
    let i = 0
    let j = arr.length-1
    while(i < j) //we dont want to subtract a same index number so thats why we have use i < j not i <= j
    {
        let sum = arr[i] + arr[j]
        if(sum < 0) i++
        else if(sum > 0) j--
        else{888887
            return [arr[i],arr[j]]
        }
    }
}
console.log(sumZeroOpt([-4,-2,-1,0,1,2,3])) //[-2,2]


//Q)implement a function called countUniqueValues, which accespts a sorted array, and counts the unique values in an array.there can be negative numbers in the array, but it will always be sorted

//solution when we cant alter the array we have to use a count variable 
let countUniqueValues = (arr)=>
{
    /*
    //width method
    return [...new Set(arr)].length
    */
   if(arr.length == 0) return 0;
   let count = 1 
    let i = 0
    let j = 1
    while(j <= arr.length-1)
    {
        if(arr[i] != arr[j])
        {
            count++;
        }
        i++;
        j++;
    }
    return count;
}
console.log(countUniqueValues([-2,-1,-1,0,1])) //4

//solution when we can alter the array
countUniqueValues = (arr)=>{
    //time - O(N)
    //in this solution we arrange unique values at the begginning
    if(arr.length == 0) return 0
    let i = 0;
    for(let j = 1; j<arr.length; j++)
    {
        if(arr[i] != arr[j])
        {
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1;
}
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
//                     i              j
//[1, 2, 3, 4, 7, 12, 13, 7, 12, 12, 13]
//i = 6 + 1 = 7 //answer

