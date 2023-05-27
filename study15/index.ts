// protected 키워드를 써보자
class User15 {
  protected x = 100;
}

class NewUser extends User15 {
  // 접근 한정자 private은 쓸 수 없다.
  // 접근 한정자 protected는 사용할 수 있다.
  doThis() {
    this.x = 20;
  }
}

// static 키워드를 써보자 (접근한정자 private, protected를 함께 쓸 수 있다. 자바랑 비슷하네ㅋ)
class User15_1 {
  static x = 100;
  y = 200;
}

let child15 = new User15_1();
// console.log(child15.x); 시용할 수 없다.
console.log(User15_1.x); // 부모만 사용할 수 있다.
