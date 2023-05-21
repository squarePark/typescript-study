var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 함수 rest 파라미터, destructuring 할 때 타입 지정
function 함수11() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수11(1, 2, 3, 4, 5, 6);
// spread operator
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
// destructuring 문법
var _a = ['안녕', 100], 변수1 = _a[0], 변수2 = _a[1];
console.log(변수1);
console.log(변수2);
var _b = { student: true, age2: 20 }, student = _b.student, age2 = _b.age2;
function 함수11_1(_a) {
    var student = _a.student, age = _a.age;
    console.log(student);
    console.log(age);
}
함수11_1({ student: true, age: 20 });
