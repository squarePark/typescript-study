// 함수와 methods에 type alias 지정하기
type study7Type = (a: string) => number;

// 함수 표현식으로 만들쟈 그러면 위의 type 을 지정해서 쓸 수 이씀!!!
let study7: study7Type = function() {
  return 0;
}

// object 안에 함수를 만들 수 있어
let 회원정보쓰 = {
  name: 'park',
  plusOne: (a: number): number => {
    return a + 1;
  },
}
회원정보쓰.plusOne(1);
