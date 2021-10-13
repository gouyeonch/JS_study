//객체 속성 존재 여부 확인
const object = {
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛미디어'
}

if(object.name) {
    console.log('name 속성이 있습니다.')
}
else{
    console.log('name 속성이 없습니다.')
}

if(object.author) {
    console.log('author 속성이 있습니다.')
}
else{
    console.log('author 속성이 없습니다.')
}

object.name || console.log('name 속성이 없습니다.')
object.author || console.log('author 속성이 없습니다.')