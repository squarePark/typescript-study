// public, private 키워드를 써보자
class UserClass {
  // public 은 자식들이 마음대로 가져다 쓸 수 있다.
  // 생략이 가능한 키워드 이다.
  public name = 'park';
  private name2 = 'jung';
  // 파라미터를 지정 가능하기 때문에 사용
  constructor(a) {
    this.name = a;
  }
}

let result = new UserClass('kim');

result.name = '헬로우';

// private 을 쓰면 클래스 내부에서만 사용 가능하기 때문에
// 접근이 불가하다.
// result.name2 = 'ddd';
