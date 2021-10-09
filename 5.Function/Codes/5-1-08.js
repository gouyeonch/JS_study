function min(...array)
{
    let min=array[0]

    for(const item of array)
        if(item<min) min=item

    return min
}

console.log(`min(52,273,32,103,275,24,57)`)
console.log(`최소값은 ${min(52,273,32,103,275,24,57)}`)
