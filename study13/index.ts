// function return 값에 붙일 수 있는 never type
// 조건1 return 값이 없어야 함
// 조건2 endpoint가 없어야 함

function 함수13(): never {
  throw new Error();
}

function 함수13_1(): never {
  while (true) {
    // 내 코드를 무한히 돌아감
  }
}

// 실제 사용 예 naver -> void 로 대체 가능하다.
// 간혹 등장하는 naver 쉐키
