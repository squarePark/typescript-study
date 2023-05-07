// 길고 복잡한 코드를 한 단어로 축약 가능
// 숫자 집어 넣으면 다른 숫자 나오는 블랙박스 역할
// 함수에 return 타입을 지정할 수 있다.
function 함수1(x: number): number {
  return x * 2;
}

함수1(30);

// return 할게 없을 때!
function 함수2(x?: number | string): void {
  // return 1 + 1; // void 는 return 할 수 없다.
  console.log(x);
}

// 함수(30);
함수2();

