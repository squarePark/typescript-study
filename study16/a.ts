
export const name16 = 'park';
export const age16 = 20;

export type Name16 = string;
export type Age16 = number;

// 옛날 방식의 타입 숨기기
module nameTest2 {

}
// import export 가 없을 때 대용으로 썼던 방법임
///<reference path="" />

// namespace 로 타입을 숨겨서 사용해 보기
namespace nameTest {
  export type Name16_1 = string | number;
}

let result16: nameTest.Name16_1 = 'park';
