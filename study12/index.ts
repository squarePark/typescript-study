// Narrowing 할 수 있는 방법 더 알아보기
function 함수12(a: string | undefined) {
  // 조건문으로 Narrowing
  // && 연산자로 null & undefined 타입 체크 하기
  if (a && typeof a === 'string') {

  }
}

// 이런식일때는 Narrowing을 어떻게 해야 할까
type Fish = {swim: string};
type Bird = {fly: string};

function 함수12_1(animal: Fish | Bird) {
  // Fish 타입인지 Narrowing 가능
  if ('swim' in animal) {
    animal.swim
  }
}

// 이럴땐 어떻게 해야할까?
type Car = {
  wheel: '4개', // 리터럴 타입을 넣어 특정지을 근거가 있을때, narrowing로 인정해 준다.
  color: string,
}
type Bike = {
  wheel: '2개',
  color: string,
}

function 함수12_2(x: Car | Bike) {
  if (x.wheel === '4개') {
    console.log('x는 Car타입이에여');
  }
}
