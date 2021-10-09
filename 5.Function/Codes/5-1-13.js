function isLeapYear(year=new Date().gitFullYear)
{
    return year%400===0||(year%4===0)&&(year%100!==0)
}

console.log(`올해는 윤년일까? === ${isLeapYear()}`)