const data = [{
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: "한빛미디어"
},{
    name: 'HTML 웹 프로그래밍 입문',
    price: 26000,
    publisher: "한빛아카데미"
}]

const json= JSON.stringify(data)
console.log(json)

console.log(JSON.parse(json))