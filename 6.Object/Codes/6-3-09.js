//객체의 얕은 복사
const 구름 = {
    이름 : '구름',
    나이 : 6,
    종족 : '강아지'
}

const 별 = {
    ...구름,
    이름: '별',
    나이: 1,
    예방접종: true
}


console.log(JSON.stringify(구름,null,2))
console.log(JSON.stringify(별,null,2))