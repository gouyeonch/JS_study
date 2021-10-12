# JS_Reference

***

- setTimeout(함수, 시간)

  > /타이머_ID
  >
  > 입력한 시간 후에 함수를 한 번 호출한다

- clearTimeout(타이머_ID)

  > setTimeout() 함수로 설정한 타이머를 제거한다

- setInterval(함수, 시간)

  > /타이머_ID
  >
  > 입력한 시간마다 함수를 호출

- clearInterval(타이머_ID)

  > setInterval() 함수로 설정한 타이머를 제거한다



***

## <u>Number, String, Boolean</u>

- valueOf()

  > /해당 객체의 값
  >
  > 보통 값을 추출한다고 표현한다





***



## <u>Number</u>

- toFixed(n)

  > /소수점 n번째 자리까지만 자른 수

- isFinite(a)

  > / bool
  >
  > a가 무한대이면(Infinity/-Infinity) true

- isNaN(a)

  > /bool
  >
  > a가 NaN(Not a Number)이면 true

***

## <u>String</u> 

- trim()

  > / 앞뒤 공백을 없엔 문자열

- split(a=' ')

  > /새로 생성된 배열
  >
  > 문자열을 a로 잘라서 배열을 만들어 반환한다
  >
  > 잘은 모르겠는데 알고리즘 대회 같은데서 많이 쓴다고 함



***

## <u>Array</u>

##### Property

- length

  > 배열의 크기 반환



##### Method

- push(요소)

  > /추가된 요소 개수
  >
  > 배열 뒷 부분에 요소를 추가

- splice(인덱스, 제거할 요소 개수)

  > /제거된 요소
  >
  > 해당 인덱스부터 입력한 개수만큼 요소제거

- splice(인덱스, 0, 요소)

  > /x
  >
  > 해당 인덱스에 새로운 요소를 차지하고 기존 인덱스의 요소부터 한 칸씩 밀림

- indexOf(요소)

  > /해당 요소의 인덱스
  >
  > 여러개면 제일 낮은 인덱스 반환

- forEach(function(value, index, array))

  > 배열 내부 요소를 사용해서 콜백 함수를 호출
  >
  > 이를 비롯한 콜백 함수를 이용한 함수들은 다소 신기하게 느껴진다
  >
  > 다소 복잡하면서도 세부적인 기능들을 다룬다

- map(function(value, index, array))

  > /변경된 배열
  >
  > 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 만든다

- filter(function(value, index, array))

  > /새로운 배열 (콜백 함수의 리턴 값이 true인 요소들의 배열)

- isArray(object)

  > /bool
  >
  > 해당 객체가 배열이면 true

***

## JSON

- stringify(object, null, 2)

  > /객체를 JSON 문자열로 출력
  >
  > 보통 위의 세팅대로 사용한다고함
  >
  > 2번째 매개변수는 잘 모르겠고, 3번째 매개변수는 들여쓰기 칸 수

- parse(JSON)

  > /object
  >
  > json 문자열을 객체로 변환

***

## Math

- random()

  > / 0<=n<1 범위의 랜덤 숫자 반환

***



## <u>for</u>

- for (const i in todos)

  > 배열의 인덱스를 기반으로 반복할 때 사용
  >
  > 이터레이터 기반의 반복문인 것 같다
  >
  > 왠진 모르지만 불완전하다고 하니 되도록 지양



- for(const todo of todos)

  > 배열의 값을 기반으로 반복할 때 사용
  >
  > 반복변수를 사용하지 않고 요소 값을 직접적으로 사용
  >
  > 익숙하진 않다