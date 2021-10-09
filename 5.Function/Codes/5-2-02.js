function callThreeTimes (callback)
{
    for(let i=0;i<3;i++) callback(i) 
    //이때 callback이 함수라는 자료형으로 쓰일 것을 뜻한다
}

callThreeTimes(function (i)
{
    console.log(`${i}번쨰 함수 호출`)
})
