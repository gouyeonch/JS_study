const max = function(first, ...items)
{
    let max

    if(Array.isArray(first))
    {
        max=first[0]
        items=first
    }
    else max=first

    for(const item of items) if(item>max) max=item

    return max
}

console.log(`min(배열): ${max([1,2,3,4])}`)
console.log(`min(숫자, ...): ${max(1,2,3,4)}`)