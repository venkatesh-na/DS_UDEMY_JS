//selection sort - select the minimum no in an array and swap at the beginning
let arr = [19,44,38,5,47,15]
// arr = [1,2,3,4,5]
for(let i = 0; i<arr.length-1; i++){
    let min = i
    for(let j = i+1; j<arr.length; j++){
        if(arr[j] < arr[min]) {
            min = j

        }   
    }
    if(i != min) [arr[i],arr[min]] = [arr[min],arr[i]]

}

console.log(arr)

//                              i
//                             min
//when arr is like this  arr = [0,2,19,44,38,5,47,15]
//so we swaping 0(index) with 0 and 1 with 1 so to avoid that we use the condition of  i != min



//base and worst case of selecetion sort is O(n^2)
//but selection sort is better than bubble sort in some cases like swap operation is very less as compare to bubble sort we just swap once on single iteration but in bubble sort we swap more than 1 on single iteration
