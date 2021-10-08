let output=''

for(let i=0;i<14;i++)
{
    for(let k=0;k<14-i-1;k++) output+=' '
    for(let j=0;j<i*2+1;j++) output+='*'
    output+='\n'
}

console.log(output)