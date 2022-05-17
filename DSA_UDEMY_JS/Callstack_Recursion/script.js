function sumRange(num)
{
    if(num == 1) return 1
    return num + sumRange(num - 1)
}
sumRange(5) //15
    //return 5 + sumRange(4)  -10
                   //return 4 + sumRange(3)  -6
                                //return 3 + sumRange(2) -3
                                              //return 2 + sumRange(1)  -1 
                                                           //1  

//check callstack in browser to see clear picture

//factorial without recursion
function factorial1(num)
{
    let ans = 1
    for(let i = num; i > 1; i--)
    {
        ans = ans * i
    }
    console.log(ans);
}
factorial1(4)

//factrorial with recursion
function factorial(num)
{
    if(num <= 1) return 1
    return num * factorial(num - 1)
}
console.log(factorial(4)) //24
            //return 4 * factorial(3)  -6
                        //return 3 * factorial(2) -2
                                    //return 2 * factorial(1)  -1
                                                    //return 1


//Helper Method Recursion
//recursive function inside the outer function is a helper method recursion
function collectOddValues(arr)
{
    let result = [] //withour collectOddValues function the result will be an global variable and we dont want that thererfore we use outer function and put recursive function and result variable inside the outer function
    function helper(helperInput)
    {
        if(helperInput.length === 0)
        {
            return;
        }
        if(helperInput[0] % 2 !== 0)
        {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))  
    }
    helper(arr)
    return result
}
console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10,11])) //[ 1, 3, 5, 7, 9, 11 ]



//Pure Recursionfunction
function collectOddValuesPure(arr)
{   
    let newArr = []
    if(arr.length == 0) return newArr
    if(arr[0] % 2  !== 0) newArr.push(arr[0])
     
    newArr = newArr.concat(collectOddValuesPure(arr.slice(1)))                                                         //-[].concat([1,3,5])
                                //[1].concat(collectOddValuesPure([2,3,4,5]))                                           -[1].concat([3,5])
                                         //[].concat(collectOddValuesPure([3,4,5]))                                     -[].concat([3,5])
                                                      //[3].concat(collectOddValuesPure([4,5]))                         -[3].concat([5])     
                                                                    //[].concat(collectOddValuesPure([5]))              -[].concat([5])
                                                                                //[5].concat(collectOddValuesPure([]))  -[5].concat([])
                                                                                             //[]                                                        
    return newArr
}
console.log(collectOddValuesPure([1,2,3,4,5]))

//pure recursion tips
/*
-For arrays use methods like slice, the spread operator, and concat that make copies of arrays so you do not ,utate them
-remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
-to make copies of objects use Object.assign, or the spread operator
*/

function flatten(arr){
    let newArray = [] //
    function flat(inputArray)
    {
        for(let item of inputArray)
        {
            if(Array.isArray(item))
            {
                flat(item)
            }
            else{
                newArray.push(item)
                
            }
        }
    }
    flat(arr)
    return newArray;
}
console.log(flatten([1, [2, [3, 4], [[5]]]]))










