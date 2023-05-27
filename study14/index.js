// public, private, protected, static 키워드를 써보자
var UserClass = /** @class */ (function () {
    // 파라미터를 지정 가능하기 때문에 사용
    function UserClass(a) {
        // public 은 자식들이 마음대로 가져다 쓸 수 있다.
        // 생략이 가능한 키워드 이다.
        this.name = 'park';
        this.name2 = 'jung';
        this.name = a;
    }
    return UserClass;
}());
var result = new UserClass('kim');
result.name = '헬로우';
// private 을 쓰면 클래스 내부에서만 사용 가능하기 때문에
// 접근이 불가하다.
// result.name2 = 'ddd';
