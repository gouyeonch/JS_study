let id
let count = 0
id = setInterval(() => {
    console.log(`1초마다 실행됩니다(${count}번쨰)`)
    count++
}, 1000)

setTimeout(()=> {
    console.log('타이머를 종료합니다')
    clearInterval(id)
}, 5000)