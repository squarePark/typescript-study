// Interface 써보기
// 장점은 뭘까? -> extends
interface Square {
  color: string,
};

interface Test extends Square {
  width: number,
};

// interface는 중복 선언이 가능하지만 type은 중복 선언이 불가능하다.
// 위 Test 랑 합쳐진다!!
interface Square {
  score?: number
};

let box: Test = {
  color: 'red',
  width: 123,
};

// 이렇게도 되지만...
type Fruit = { name: string };
type Banana = { age: number } & Fruit;

// 외부 라이브러리는 interface를 많이 쓴다.
// 커스터마이징을 하고 싶거나 등등 할 때, 외부라이브러리가 interface 선언이 많으면
// 내가 타입을 추가해서 쓰기 쉬움!!
// 일반 변수 함수 타입으로 선언 하고 규칙을 사용해서 쓰면 좋을 듯
