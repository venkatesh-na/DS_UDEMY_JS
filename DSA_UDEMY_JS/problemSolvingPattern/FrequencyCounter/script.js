//write a function called same,which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same

//frequnecy counter is a technique in which we use object or sets for storing value/frequencies of values so that we can avoid nested loops or O(N^2)
function same(arr1,arr2) //time complexity - O(N^2) //space complexity - O(1)
{
    if(arr1.length !== arr2.length) return false
    for(let i = 0; i<arr1.length; i++)
    {
        let correctIndex = arr2.indexOf(arr1[i] * arr1[i])
        if(correctIndex === -1) return false
        arr2.splice(correctIndex,1)
    }
    return true
}
console.log(same([1,2,3,2],[9,1,4,4]))

//Frequency counter pattern
function sameOpt(arr1,arr2)
{
    if(arr1.length !== arr2.length) return false
    //creating fcounter for arr1
    let frequencyCounter1 = {}
    //creating fcounter for arr2
    let frequencyCounter2 = {}
    //store fq for items in arr1
    for(let item of arr1)
    {
        frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1
    }
    //store fq for items in arr2
    for(let item of arr2)
    {
        frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1
    }
    //iterate throught arr1 and check the frequency
    for(let item of arr1)
    {
        if(!item * item in frequencyCounter2) return false
        if(frequencyCounter2[item * item] !== frequencyCounter1[item]) return false
    } 
    return true
}
console.log(sameOpt([1,2,3,2],[9,1,4,4]))

//Given tw strings, write a function to determine if teh second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letter of another, such an cinema, formed from iceman


//string1 and string2 doest contain spaces , number , non alphanumerics
function validAnagram(string1,string2){
  // add whatever parameters you deem necessary - good luck!
  if(string1.length != string2.length) return false
    let fqCounter1 = {} //O(m)
    let fqCounter2 = {} //O(n)
    for(let char of string1)
    {
        fqCounter1[char] = (fqCounter1[char] || 0) + 1
    }
    for(let char of string2)
    {
        fqCounter2[char] = (fqCounter2[char] || 0) + 1
    }
    for(let char of string1)
    {
        if(fqCounter1[char] != fqCounter2[char]) return false
    }
    return true
    //time complexity O(N) space - O(m + n)
}

console.log(validAnagram("aaz","zaa"))