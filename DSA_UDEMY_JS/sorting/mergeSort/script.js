//sorting algorithm which reduces time complexity from o(n^2) to o(nlogn)
//this below sorting algo is used when data set is larger
//Merge sort
//quick sort
//redix sort 

//Merge sort - split - sort - merge



function merge(a1,a2){
    //time complexity is o(m + n)  - m = a1 length and n = s2 length
   let newArray = []
   let i = 0;
   let j = 0;
   while(i < a1.length && j < a2.length){
           if(a1[i] < a2[j]){
               newArray.push(a1[i])
               i++;
           }
           else{
               newArray.push(a2[j])
               j++;
           }
   }
   //adding remaining array elem into newArray
   while(i < a1.length){
    newArray.push(a1[i])
    i++;
   }
   while(j < a2.length){
    newArray.push(a2[j])
    j++;
   }
   return newArray
}



function mergeSort(arr)
{
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid,arr.length))
    return merge(left,right)
}
console.log(mergeSort([10,24,76,73,72,1,9]))


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
function stringifyNumbers(obj)
{
    let newObject = JSON.parse(JSON.stringify(obj))
    function stringify(testObj)
    {
        for(let prop in testObj)
        {
            if(!isNaN(testObj[prop]))
            {
                testObj[prop] = String(testObj[prop])
            }
            else if(typeof testObj[prop] === "object" && !Array.isArray(testObj[prop]))
            {
                stringify(testObj[prop])
            }
        }
    }
    stringify(newObject)
    return newObject
}

 console.log(stringifyNumbers(obj))