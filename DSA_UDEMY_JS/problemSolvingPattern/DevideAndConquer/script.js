//Devide and conquer
//like we devide the data set into smaller chunks and then repeating a process with a sunset of data
//this pattern can tremendously decrease time complexity

//eg: binary search tree
function findLongestSubstring(string){
 //thisisawesome 
 let maxLength = 0
 for(let i = 0; i<string.length; i++)
 {
    let object = {}
    for(let j = i; j<string.length; j++)
    {
        if(object[string[j]] > 0) break;
        object[string[j]] = 1
    }
    maxLength = Math.max(Object.keys(object).length,maxLength)
 }
 return maxLength
}
console.log(findLongestSubstring("thecatinthehat"))

