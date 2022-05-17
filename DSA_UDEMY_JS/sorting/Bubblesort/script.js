//build in javascript method
console.log(["c","d","a","b"].sort()) //[ 'a', 'b', 'c', 'd' ] - sorted propertly
console.log([4,2,1,10].sort()) //[ 1, 10, 2, 4 ]  - not sorted (becuase sort sorts according to unicode)

//rules when we use build in js sort
//if - is returned than descending
//if + is returned than asscending

//sorting acceding
console.log([4,2,1,10].sort((a,b)=>a-b))//[ 1, 2, 4, 10 ]
//4 - 2 = 2+  [2,4]

//sorting descending
console.log([4,3,1,10].sort((a,b)=>b-a))//[ 10, 4, 3, 1 ]
//3 - 4 = -1 [4,3]

//sort by the length of string
console.log(["da","data","dat","datas"].sort((a,b)=>a.length - b.length)) //[ 'da', 'dat', 'data', 'datas' ]

//Bubble sort( name defines every thing - shifting larger element to the end of teh array )
let arr = [8,1,2,3,4,5,6,7]
let count  = 0
for(let i = 1; i<arr.length; i++)
{
    for(let j = 0; j<arr.length-i; j++)
    {
        count++;
        if(arr[j] > arr[j+1])
        {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(count) //28 step
console.log(arr) //sorted

//bubble sort optimized with noswap variable
//best case - O(n) - when array is sorted - only when we use optimized bubble sort code
//worst case - O(n^2) - when it is unsorted 
count = 0;
for(let i = 1; i<arr.length; i++)
{
    let noSwap = true
    for(let j = 0; j<arr.length-i; j++)
    {
        count++;
        if(arr[j] > arr[j+1])
        {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            noSwap = false
        }
    }
    if(noSwap) break;
}
console.log(count) //7 step
console.log(arr) //sorted
