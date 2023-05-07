// 타입이 너무 길고 복잡할 때, 별칭으로 만들어 쓰자
type Animal = string | number | undefined;

let 동물: Animal = 123;

// 특히 Object 타입일 때,
type Animal2 = {
  name: string,
  age: number,
}
let 동물2: Animal2 = { name: '원숭이', age: 20 };

// 재할당 금지이지 값 변경은 가능함
const 출생지역 = { region: 'seoul' };
출생지역.region = 'busan';

// 타입 스크립트는 rock 이 가능함
type Friend = {
  readonly name?: string // 읽기 전용으로 바꾸면 바꿀 수 없어영
}
const 애인: Friend = {
  name: '제임스'
}

// readonly 로 바꿀 수 없다는 것을 알려줌
// 그러나 js 에서는 실행이 가능함요
// 애인.name = '데이빗';

// 타입 합치기
// 같은 이름의 type 변수는 재정의 할 수 없음
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

// & 연산자로 object 타입 extend 하기
type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

// 숙제
type Design = {
  color?: string,
  size: number,
  readonly position: number[],
}

let 테스트용변수 :Design = {
  size : 123,
  position : [1,2,3]
}
