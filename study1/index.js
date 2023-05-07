var myName = 'Park';
var myNameArr = ['Park', 'kim'];
var myNameObj = { name: 'Park' };
// Union type : 문자열이 들어 올 수도 있고 문자열이 들어 올 수도 있다.
var myName2 = 0;
var testType = 123;
// 함수에 타입 지정하기
// 함수의 리턴 타입도 지정할 수 있다.
function 함수(x) {
    return x * 2;
}
var john = [123, false];
var john2 = { name: 'kim' };
// 클래스에 타입을 지정해 보기
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
