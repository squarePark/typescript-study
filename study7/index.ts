// Literal Types 더 엄격한 타입을 지정하자.
let 이름이름: 'kim'; // 무조건 kim 만 들어올 수 있다.
이름 = 'kim';

// 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// 자동완성도 굿임
let 나에요: '귀여움' | '멋짐';
나에요 = '귀여움';

function 나란함수(a: '귀여워'): 1 | 0 {
  return 1;
}
나란함수('귀여워');

// 연습문제
// 가위, 바위, 보 문자만 입력가능
function 가위바위보게임(b: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return [b];
}
가위바위보게임('가위');

// const 변수 유사품 as const 자료를 만들고 변경할 수 없게!
// 이 object는 value 값을 그대로 타입을 지정해 줘라
var 자료 = {
  name: 'park'
} as const // 여기에 as const 달면 됨

function 나의함수(a: 'park') {

}

// 왜 에러가 날까?
나의함수(자료.name);
// 나의 함수는 park 이라는 타입만 들어올 수 있어여
// 그래서 자료는 string 이기에 넣을 수 없어여

// 방법 1 object 만들 때, 타입을 미리 정하던지
// 방법 2 assertion as 'kim' 이런식으로 써서 빠따 쳐 맞던지
// 방법 3 as const 써서 해결하던지
//       as const 는 2개의 효과가 있다.
//       1. 타입을 object 의 value 로 바꿔줌
//       2. ojbect 안에 있는 모든 속성을 readonly 로 바꿔줌
// 결론 ... object 를 잠궈 놓고 쓸 수 있음

// 하나 더 써볼까?
const colors = ['red', 'green', 'blue'] as const;
// colors[0] = 'yellow'; // 이게 되면 안되잔슴!! 그니까 위 color 변수에 as const 를 넣으면
// 0번째에 넣을 수 없다고 알려줌 ~_~

