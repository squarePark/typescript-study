// implements 키워드
// implements 를 사용하면 CarType 속성을 이 클래스가 가지고 있는지 확인 할 수 있다.
var Car21 = /** @class */ (function () {
    function Car21(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car21;
}());
var superCar = new Car21('moring');
// implements는 타입 지정문법이 아니다.
// class에 타입을 할당하고 변형시키는 키워드가 아니다.
