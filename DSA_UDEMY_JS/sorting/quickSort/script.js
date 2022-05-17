//Quick sort

//select first element as pivot elenent and shift all the element less than pivot element to the left of it and shift all the element greater than pivot element to the right of it and after than the index at pivot element is there is sorted element
function pivot(arr,start=0,end=arr.length-1)
{
    let swapIndex = start
    let pivot = arr[start]
    for(let i = start+1; i<=end; i++){
        if(pivot > arr[i]) {
            swapIndex++; 
                [arr[i],arr[swapIndex]] = [arr[swapIndex],arr[i]]
            }
    }
    [arr[start],arr[swapIndex]] = [arr[swapIndex],arr[start]]
    return swapIndex;
}
let array = [26,23,27,44,17,47,39,42,43,1]
    // array = [28,41,4,11,16,1,40,14,36,37,42,18]
    // array  = [4,8,2,1,5,7,6,3]
console.log(pivot(array))

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
    console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))

    

