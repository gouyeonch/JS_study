function min(first, ...rests)
{
    let min
    let items

    if(Array.isArray(first))
    {
        min=first[0]
        items=first
    }
    else
    {
        min=first
        items=rests
    }

    for(const item of items)
        if(item<min)min=item
    
    return min
}

console.log(`min(배열): ${min([52,273,32,103,275,24,57])}`)
console.log(`min(숫자, ...): ${min(52,273,32,103,275,24,57)}`)