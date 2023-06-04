// declare 키워드를 써보자
// 일반 js 파일 등에 있는 변수를 사용할 때, 에러가 나지 않도록 재정의할 때 사용한다.
declare let dataA: number;

console.log(dataA + 1);

// import export 대신 쓸 수 있는 ambient module(글로벌 모듈)
// 모든 타입스크립트는 선언한 변수를 바로 사용할 수 있음
let study19A = 10;

// 그래서 모든 변수는 전역 변수가 되므로,
// 로컬 모듈로 만들어서 사용하자
export {}

// declare global
// 로컬 모듈을 글로벌 모듈로 쓰고 싶어질 때
declare global {
  type Dog = string;
}