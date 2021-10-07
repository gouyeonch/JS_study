let output = 0;

for(let i=1;i<=10;i++)
{
    if(i&1===1) continue
    output+=i;
}

alert(output)