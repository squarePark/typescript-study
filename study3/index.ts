let 회원: (number | string | boolean) = 'park'; // Union Type

let memberList: (number | string)[] = [1, '2', 3];
let object: { a: string | number } = { a: '123' };

// 별거를 다 넣을 수 있음 타입을 해제하는 것 사용을 지양하자
let Name: any;
Name = 123;
Name = [];

// any 대신 unknown
let newName: unknown = 1;

// 여러 값을 넣을 수 있다
newName = 123;
newName = undefined;
newName = [];

// 하지만 연산은 되지 않음
// newName - 1; // 안되는 거임
// 왜냐하면 타입스크립트는 정확하고 엄격하고 확실한 것을 좋아하기 때문
// 확실하지 않은 타입에 연산을 하는거 싫어함
// 숫자가 아닐 경우 더하기 빼기를 할 수는 없기 때문에

// 그래서 any, unknown 을 부여하는 경우는 아직 뭘 넣을지 모를 경우 약간의 안전성을 도모하고 싶을 때 사용하고
// 나중에 Narrowing / Assertion 배워서 엄격하게 코드를 짜도록 해야 한다.

// 숙제1
let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false; 
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

// 숙제2
type Shcool = {
  score: (number | boolean)[],
  teacher: string,
  friend: string | string[],
};

let 학교: Shcool = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher];
