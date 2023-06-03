// tuple type
// 옵셔널은 맨뒤에서 처리 해야 한다.
let dog: [string, boolean?] = ['치와와', true];

// 어디에 활용할 수 있을까?
// rest parameter
function 함수18(...x: [number, string]) {
  console.log(x);
}
함수18(1, '2');

function 함수18_1(a: number, b: string) {
  console.log([a, b]);
}
함수18_1(1, '2');

let arr18 = [1, 2, 3];
let arr18_1: [number, number, ...number[]] = [4, 5, ...arr18];

