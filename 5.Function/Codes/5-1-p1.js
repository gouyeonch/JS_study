function mul(A,B)
{
    let res=1
    for(let i=0;i<B-A+1;i++) res*=(A+i)
    return res
}

console.log(mul(1,2))
console.log(mul(1,3))