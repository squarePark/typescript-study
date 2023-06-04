var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// tuple type
// 옵셔널은 맨뒤에서 처리 해야 한다.
var dog = ['치와와', true];
// 어디에 활용할 수 있을까?
// rest parameter
function 함수18() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
함수18(1, '2');
function 함수18_1(a, b) {
    console.log([a, b]);
}
함수18_1(1, '2');
var arr18 = [1, 2, 3];
var arr18_1 = __spreadArray([4, 5], arr18, true);
