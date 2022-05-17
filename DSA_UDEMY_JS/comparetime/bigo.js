function addUpTo(n) //o(n) - time complexeity
{
    let sum = 0
    for(let i = 1; i<=n; i++) sum += i
    return sum
}
var t1 = performance.now()
console.log(addUpTo(1000000000))
var t2 = performance.now()
console.log(`time required ${t2 - t1}`) //2.1s

function addUpToOpt(n)//o(1) - time complexity
{
    return n * (n + 1)/2
}
var t1 = performance.now()
console.log(addUpToOpt(1000000000))
var t2 = performance.now()
console.log(`time required ${t2 - t1}`) //0.7s
//performance.now() is not the best way to find time complexeity becuase it varies from device to device
//so we use big o notation


//o(1) contant < o(logn) < o(n) linear < o(nlogn) < o(n^2) quadratic
//always see the big picture1

//time complexity
//arithmetic operation, variable assignment, accessing a value is contant time complexity
//in loop the complexity is the length of the loop

//space complexity
//primitive - o(1)
//string - o(n) - n - length of string
//structural or refrence type - o(n) - n length of array , no of keys in object
let obj = {
    a:1,
    b:2,
    c:3
}
console.log(Object.keys(obj).length) //in case of object and array and string the space complexity is depend on length of it
//o(n) - space complexity 


//logaritmic complexity is mostly used in recursion, searching, effective sorting