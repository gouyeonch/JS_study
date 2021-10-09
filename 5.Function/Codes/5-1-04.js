//4로 나눠지면 윤년
//100으로 나눠지면 x
//400으로 나눠지면 o
//윤년이면 true 아니면 false return

function isLeapYear(year)
{
    return year%400===0||(year%4===0)&&(year%100!==0)
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`)
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`)
console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`)
console.log(`1900년은 윤년일까? === ${isLeapYear(1900)}`)