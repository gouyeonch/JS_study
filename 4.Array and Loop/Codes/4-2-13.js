let output=''

for(let i=0;i<9;i++)
{
    for(let j=0;j<i+1;j++) output+='*'
    output+='\n'
}

console.log(output)