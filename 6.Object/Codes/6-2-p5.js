const books = [{
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: "한빛미디어"
},{
    name: 'HTML 웹 프로그래밍 입문',
    price: 26000,
    publisher: "한빛아카데미"
},{
    name: '머신러닝',
    price: 30000,
    publisher: "위키북스"
},{
    name: '딥러닝을 위한 수학',
    price: 25000,
    publisher: "위키북스"
}]

const output = _.orderBy(books, (book) => book.name)
console.log(JSON.stringify(output, null, 2))