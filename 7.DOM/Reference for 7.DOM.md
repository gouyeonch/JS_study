# Reference for **7. DOM**

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

## <u>JSON</u>

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

## <u>Math</u>

- random()

  > / 0<=n<1 범위의 랜덤 숫자 반환

***

## <u>document</u>

- head, body, title

  > 각각 해당 요소들을 읽어들일 수 있다

- addEventLinstener(이벤트 이름, 이벤트 리스너)

  > 이때 이벤트 리스너는 콜백 함수로서 이벤트 핸들러 라고도 불린다
  >
  > 이벤트 이름에 해당하는 이벤트가 발생하면
  >
  > 이벤트 리스너(콜백 함수)가 실행 된다

- removeEventListener(이벤트 이름, 이벤트 리스너)

  > addEventListener로 추가한 이벤트를 제거함
  >
  > 이벤트 리스너에는 추가했던 이벤트 리스너를 그대로 넣음
  >
  > 이벤트 리스너는 상수, 변수에 저장해서 관리해야 할 듯

- querySelector(선택자)

  > 해당 선택자에 해당 하는 문서 객체를 가져옴
  >
  > 여러 개면 젤 위에 하나만 적용 시키는 듯

- querySelectorAll(선택자)

  > 해당 선택자에 해당 하는 문서 객체 여러 개를 배열로 가져옴
  >
  > 일반적으로 가져온 배열 객체를 활용하려면 forEach()를 같이 씀
  
- createElement(문서 객체 이름)

  > /문서 객체
  >
  > HTML 요소로 문서 객체를 생성 할 수 있다
  >
  > querySelector 처럼 어딘가에서 문서 객체를 가져오는게 아니라
  >
  > 기능을 가진 문서 객체를 생성해서 식별자에 할당 할 수 있다

***

## <u>문서 객체</u>

- innerHTML

  > 입력된 문자열을 HTML 형식으로 넣어 준다 (( 문자열은 대충 기본 연산자 =, +=로 넣어 주는 듯

- textContent

  > 입력된 문자열을 문자열 그대로 넣어 준다

- setAttribute(속성 이름, 값)

  > 특정 속성에 값을 지정합니다
  >
  > 근데 이거 없이 그냥 바로 할당도 가능함

- gitAttribute(속성 이름)

  > 특정 속성을 추출함
  >
  > 근데 querySelector랑 뭐가 다른진 모르겠슴
  
- (부모 객체).appendChild(자식 객체)

  > 부모 객체에 자식 객체로서의 문서객체를 <u>할당</u> 한다
  >
  > 부모 객체는 무조건 하나여야 하므로
  >
  > 다른 부모 객체에 할당 하므로서
  >
  > 기존 부모 객체와의 연결을 끊고, 다른 부모 객체로 자식 객체를 <u>이동</u> 시킬 수도 있다

- (부모 객체).removeChild(문서 객체)

  > 부모 객체와의 연결을 끊음으로써 문서 객체를 제거한다
  >
  > 일반적으로 appendChild로 부모 객체와 연결이 되어있으므로 parentNode로 부모 객체에 접근해 사용
  >
  > 문서 객체.parentNode.removeChild(문서 객체)
  >
  > 부모에서 자식으로 접근은 유일하지 않지만, 자식에서 부모 접근은 유일하므로 이런 방법을 사용하는듯

***

## event

- keydown

  > 키가 눌릴 때, 누르고 있을 때, 입력될 때 실행 (아시아권 문자 제대로x)

- keypress

  > 키가 입력되었을 때 실행 (아시아권 문자 제대로x)

- keyup

  > 키보드에서 키가 떨어질 때 실행 (아시아권 문자 o)

  - code

    > 입력한 키

  - keyCode

    > 입력한 키를 나타내는 숫자(방향키 같은 거 나타낼 때 쓸 듯)

  - altKey

    > alt 눌렀는지

  - ctrlKey

    > ctrl 눌렀는지

  - shiftKey

    > shift 눌렀는지

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