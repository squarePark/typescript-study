// generic 함수 만들어 보기
// 확장성이 있음
function 함수17(x) {
    return x[0];
}
var a = 함수17([4, 2]);
var b = 함수17(['4', '2']);
console.log(a);
// 타입의 파라미터를 확장하면서 제한하기
function 함수17_1(x) {
    return x - 1;
}
var c = 함수17_1(100);
function 함수17_2(x) {
    return x.length;
}
var d = 함수17_2(['100']);
