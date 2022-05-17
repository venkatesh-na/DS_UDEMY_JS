function linearSearch(arr,value)
{
    let i = 0
    while(i < arr.length)
    {
        if(arr[i] === value) return i
        i++;
    }
    return -1;
}
console.log(linearSearch([1,2,3,4],2))

