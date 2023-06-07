// implements 키워드

interface CarType {
  model: string,
  price: number,
}

// implements 를 사용하면 CarType 속성을 이 클래스가 가지고 있는지 확인 할 수 있다.
class Car21 implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}

let superCar = new Car21('moring');

// implements는 타입 지정문법이 아니다.
// class에 타입을 할당하고 변형시키는 키워드가 아니다.
