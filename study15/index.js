var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// protected 키워드를 써보자
var User15 = /** @class */ (function () {
    function User15() {
        this.x = 100;
    }
    return User15;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 접근 한정자 private은 쓸 수 없다.
    // 접근 한정자 protected는 사용할 수 있다.
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(User15));
// static 키워드를 써보자 (접근한정자 private, protected를 함께 쓸 수 있다. 자바랑 비슷하네ㅋ)
var User15_1 = /** @class */ (function () {
    function User15_1() {
        this.y = 200;
    }
    User15_1.x = 100;
    return User15_1;
}());
var child15 = new User15_1();
// console.log(child15.x); 시용할 수 없다.
console.log(User15_1.x); // 부모만 사용할 수 있다.
