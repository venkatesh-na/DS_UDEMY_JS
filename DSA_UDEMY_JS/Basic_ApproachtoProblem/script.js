//problem solving
/*
1) understand the problem
    - what are the input, what is the type of input like is it int,float, or big interger
    - what are the output that comes from the problem like the type of output int, float etc
    - do we have inuf information to solve the problem
    - how can i name the information that i have like num1,num2, result etc
2) explore concrete example
    Q)write  function that takes in string and return the count of each character in a string
    - start with simple example
        -charCount("aaa") //{a:3}
    - progress to more complex example
        -charCount("hi my phone no s 123") - does we have to include number and space as well
    - explore examples with empty inputs
        -charCount("") - do we have to conside empty string or sh
        ould we just return {} or null
    - explre example width invalid inputs  
        -charCount(123) - showld we return null,false,undefined etc
3) Break it down
    -make the scaleton of the solution
    Q)write  function that takes in string and return the count of each character in a string
    function charCount(string)
    {
        //make object to return at the end
        //loop over string for each character
            //if the char is number/letter AND is a key in object , add one to count
            //if the char is number/letter AND is not a key in object than add it , set count to 1
            //if char is something else return nothing
        //return object at the end
    }
4) solve/simplify
    -just write code and keep the thing at the end which you dont know
5) Look Back and Refactor
    - can you check the result
    - can you understand it at a glace
    - better time and space complexity
    - try to make the code shorter
    - can you use your aproach to solve other problem that you have faced earlier
    - how other people solved the problem

*/

// function charCount(string)
// {
//     let obj = {}
//     for(let i = 0; i<string.length; i++) //dont need traditional for loop
//     {
//         let char = string[i].toLowerCase()
//         if(char.match(/[a-z0-9]/g)) //using regular expression is not the best way
//         {
//             //can use turnary operator
//             if(obj[char] > 0) obj[char]++;
//             else obj[char] = 1
//         }
//     }
//     return obj
// }
// console.log(charCount("hello 123"))

//refactor above code
function charCount(string)
{
    let obj = {}
    for(let char of string) 
    {
        char = char.toLowerCase()
        if(isAlphaNumeric(char)) 
            (obj[char] > 0)  ? obj[char]++ : obj[char] = 1
    }
    return obj
}

function isAlphaNumeric(c)
{
    if(!(c.charCodeAt() >= 97 && c.charCodeAt() <= 122) &&
    !(c.charCodeAt() >= 49 && c.charCodeAt() <= 57) && 
    !(c.charCodeAt() >= 65 && c.charCodeAt() <= 90))
    {
        return false
    }
    return true
}

console.log(charCount("hello 123"))
