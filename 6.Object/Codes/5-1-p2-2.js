const max = function(...items)
{
    let output=items[0]
    for(const item of items) if(item>output) output=item

    return output
}

console.log(max(1,2,3,4))