// generic 함수 만들어 보기
// 확장성이 있음
function 함수17<T>(x: T[]): T {
  return x[0];
}

let a = 함수17<number>([4, 2]);
let b = 함수17<string>(['4', '2']);
console.log(a);

// 타입의 파라미터를 확장하면서 제한하기
function 함수17_1<T extends number>(x: T) {
  return x - 1;
}

let c = 함수17_1<number>(100);


// 타입의 파라미터를 확장하면서 제한하기2
interface LengthCheck {
  length: number
}

function 함수17_2<T extends LengthCheck>(x: T) {
  return x.length;
}

let d = 함수17_2<string[]>(['100']);
