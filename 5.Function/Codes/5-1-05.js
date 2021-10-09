//A,B가 주어졌을떄 A,B 안에 있는 숫자 모두 더해서 return

function sum(A,B)
{
    let res=0
    for(let i=0;i<B-A+1;i++) res+=A+i
    return res
}

//A,B가 주어졌을떄 A,B 안에 있는 숫자 모두 곱해서 return

function mul(A,B)
{
    let res=1
    for(let i=0;i<B-A+1;i++) res*=(A+i)
    return res
}
