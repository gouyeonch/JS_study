//객체 기본 속성 지정
const object = {
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛미디어'
}

object.name = object.name !== undefined ? object.name : '제목 미정'
object.author = object.author !== undefined ? object.author : '작가 미정'

console.log(JSON.stringify(object,null,2))

object.name = object.name || '제목 미정'
object.author = object.author || '작가 미정'