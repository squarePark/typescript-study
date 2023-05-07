
// Narrowing 문법을 써보자 (타입 좁히기)
function 내함수(x: number | string) {
  if (typeof x === 'string') {
    return x + '1';
  } else {
    return x + + 1;
  }
}

내함수(123);

function 내함수2(x?: number | string) {
  let arr: number[] = [];
  if (typeof x === 'number') {
    arr[0] = x;
  }
  // Object.prototype.toString.call(x);
  // in, instanceof 타입 Narrowing
}

내함수2(123);

// assertion 문법 - 타입 덮어쓰기
// 여러가지 타입일 경우, 어떤 타입이 들어올지 100% 확실할 경우 사용해야 된다.
// as 는 구라이기 때문임
// 비상용, 디버깅용으로 쓰자
function 내함수3(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number;
}

let 이름5: string = 'park';
// 이름5 as number; // 안됨
// 옛날 방법

내함수3(123);

// 숙제1 문자열러 들어오는 숫자를 모두 숫자로 변환해 주는 함수를 만들어 보자
function stringToNumberArray(arr: (number | string)[]) {
  let result: number[] = [];

  arr.forEach((b) => {
    if (typeof b === 'string') {
      result.push(parseFloat(b));
    } else {
      result.push(b);
    }
  });
  return result;
}

stringToNumberArray([1, 2, 3, '4', 5, '6','7']);

// 숙제2
function 새로운함수를만듬(x: { subject: string | string[] }): string {
  if (typeof x.subject === 'string') {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return '없음';
  }
}

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

새로운함수를만듬(철수쌤);

