//insertion sort - taking an element one at a time and inserting at in the correct position
let arr  = [2,1,9,76,4]
for(let i = 1; i<arr.length; i++)
{
    let currentVal = arr[i]
    for(var j = i-1; j>=0 && arr[j] > currentVal; j--)
    {
            arr[j+1] = arr[j] 
            console.log(arr)  
    }
    arr[j+1] = currentVal
    console.log("--out of iteration--")
    console.log(arr)
}

console.log(arr)
// [ 2, 2, 9, 76, 4 ]
// --out of iteration--
// [ 1, 2, 9, 76, 4 ]      
// --out of iteration--
// [ 1, 2, 9, 76, 4 ]      
// --out of iteration--    
// [ 1, 2, 9, 76, 4 ]      
// [ 1, 2, 9, 76, 76 ]     
// [ 1, 2, 9, 9, 76 ]
// --out of iteration--    
// [ 1, 2, 4, 9, 76 ]      
// [ 1, 2, 4, 9, 76 ] 