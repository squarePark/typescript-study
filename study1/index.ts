let myName: string = 'Park';
let myNameArr: string[] = ['Park', 'kim'];
let myNameObj: { name?: string } = { name: 'Park' };

// Union type : 문자열이 들어 올 수도 있고 문자열이 들어 올 수도 있다.
let myName2: string | number = 0;

// 타입을 변수에 담아쓰기
type myType = string | number;
let testType: myType = 123;

// 함수에 타입 지정하기
// 함수의 리턴 타입도 지정할 수 있다.
function 함수(x: number): number {
	return x * 2;
}

// array 의 tuple 타입 지정
// array 의 첫번째는 무조건 숫자, 두번째는 불리언 만 입력할 수 있다.
type Member = [number, boolean];
let john: Member = [123, false];

// object 타입 지정
// key 가 많을 경우 아래와 같이 설정해서 사용 가능
type Member2 = {
	[kei: string]: string;
}
let john2: Member2 = { name: 'kim' };

// 클래스에 타입을 지정해 보기
class User {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}
