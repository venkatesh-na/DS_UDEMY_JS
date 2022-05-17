//Q)write a function called maxSubarraySum which accepts an array of intergers and a number called n The function should calculate the maximum sum of n consecutive elements in the array

//sliding window - remove the 1st item from subset and add the item which is next to subset into subset for getting the subset
//from sliding window we avoid uncessary addition
let maxsubArraySum = (arr,sub)=> //time - O(N^2)
{
    if(arr.length < sub) return null
    let max = -Infinity
    for(let i = 0; i<=arr.length - sub; i++)
    {
        let sum  = 0
        for(let j = i; j<i+sub; j++)
        {
            sum += arr[j]
        }
        if(sum > max) max = sum
    }
    return max;
}
console.log(maxsubArraySum([2,6,9,2,1,8,5,6,3],4))
//[2,6,9,2,1,8,5,6,3]
//2 6 9 = 17
//6 9 2 = (17,17) 17
//9 2 1 = (12,17) 17

//O(N) approach - remove the 1st item from subset and add the item which is next to subset
maxsubArraySum = (arr,sub)=>{ //space - O(1)
    if(arr.length < sub) return null
    let maxSum = 0
    let tempSum = 0
    for(let i = 0; i<sub; i++)
    {
        maxSum += arr[i]
    }    
    tempSum = maxSum //17
    //maxsum - 17
    for(let i = sub; i<arr.length; i++)
    {
        tempSum = tempSum - arr[i - sub] + arr[i] //19
        maxSum = Math.max(maxSum,tempSum) //19
    }
    return maxSum;
}
console.log(maxsubArraySum([2,6,9,2,1,8,5,6,3],3))

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) { 
      //thisisawesome
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]); //3
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1; 
  }
  return longest;
}
console.log(findLongestSubstring("thisisawesome"))

function minSubArrayLen(nums, sum) {
let s = 0
let e = 0
let minLength = Infinity
let total = 0

while(s < nums.length)
{
    if(total < sum && e < nums.length)
    {
        total += nums[e]
        e++;
    }
    else if(total >= sum)
    {
        minLength = Math.min(minLength,(e - s))
        total -= nums[s]
        s++;
    }
    else
    {
        break;
    }
}
return minLength === Infinity ? 0 : minLength
}
console.log(minSubArrayLen([2,3,1,2,4,3],7)) //2