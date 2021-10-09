function min(array)
{
    let min=array[0]

    for(const item of array)
        if(item<min) min=item

    return min
}

const testArray =[52,273,32,103,275,24,57]
console.log(`${testArray}중에서`)
console.log(`최소값은 ${min(testArray)}`)
