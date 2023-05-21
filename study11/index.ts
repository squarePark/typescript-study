// 함수 rest 파라미터, destructuring 할 때 타입 지정
function 함수11(...a: number[]) {
  console.log(a);
}
함수11(1, 2, 3, 4, 5, 6);

// spread operator
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];

console.log(arr3);

// destructuring 문법
let [변수1, 변수2] = ['안녕', 100];
console.log(변수1);
console.log(변수2);

let { student, age2 } = { student: true, age2: 20 };

function 함수11_1({ student, age }: { student: boolean, age: number }) {
  console.log(student);
  console.log(age);
}
함수11_1({ student: true, age: 20 });
