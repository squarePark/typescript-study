// Narrowing 할 수 있는 방법 더 알아보기
function 함수12(a) {
    // 조건문으로 Narrowing
    // && 연산자로 null & undefined 타입 체크 하기
    if (a && typeof a === 'string') {
    }
}
function 함수12_1(animal) {
    // Fish 타입인지 Narrowing 가능
    if ('swim' in animal) {
        animal.swim;
    }
}
function 함수12_2(x) {
    if (x.wheel === '4개') {
        console.log('x는 Car타입이에여');
    }
}
