//Dynamic programming
//objective - what overallaping subproblems are
//          -  understand what optimal substructure is
  
//Dynamic programming - A method of solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions

//we can use dynamic programming only when problem has optimal substructure and overlapping subproblem present


//fibonacci using recursive solution
function fib(n){
    if(n <= 2) return 1
    return fib(n-1) + fib(n-2)
}
//Time complexity of above solution is 2^n which is worse than n^2
/*              fib(5)
         fib(4)          (fib(3))
    (fib(3))           fib(2)    fib(1)     
fib(2)    fib(1)    

-we are finding fib(3) and fib(2) two time which is an example of overlapping subproblem which means we can use dynamic programming  
so what we can do is we remember the fib(3) solution and use its solution whenever fib(3) comes multiple time 
-so to store the old solution we use memoization
-storing the answer of repeated sub problems is a way to solve overlapping subproblem
-see the definition which tells exactly what we written above
*/

//recursion + memoization
//in a memo we store the result at certain n and we use it in future when we got a same problem with that n
//we can use memo as a object as well
function fib_memo(n,memo){
if(memo[n] !== undefined) return memo[n]
if(n <= 2) return 1
var res = fib_memo(n-1,memo) + fib_memo(n-2,memo)
memo[n] = res 
return res;
}
console.log(fib_memo(5,[]))


//fibonacci with recursion , fib(100) almost crash the browser - o(2^n) - exponential time complexity
//fibonacci with recursion + memoization ,fib(100) give resut in fraction of second - o(n) - linear

//we've been working top down approach but there is another way which is bottom up approach

/*
top-down
          fib(4)
    fib(3)       fib(2)
  fib(2)  fib(1)
    
first we find 4 ,3,2

but bottom up approach is 1,2,3
we can do bottom up approach by using iteratively by array but for better space complexity you can use tabulation

*/

//Tabulated version
function fib_table(n){
    if(n <= 2) return 1
    let fibNums = [0,1,1]
    for(let i = 3; i<=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[n]
}
console.log(fib_table(5))

fib_memo(10000) //maximum call size exceed - becuase there is lot of function call are waiting for their result
fib_table(10000) //Infinity