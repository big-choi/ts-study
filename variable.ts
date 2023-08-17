// type을 변수로 만들기 (Type Aliases)
type Animal = string | number | undefined;

let 동물: Animal = 'Panda';

type AnimalType = { name: string; age: number };
let 동물2: AnimalType = { name: 'kim', age: 20 };

const 여친 = {
  name: 'lee',
};

여친.name = '유라'; // 변경 가능

type Girlfriend = {
  readonly name: string; // 읽기 전용, 수정 시 에러발생.
  // name? : string
};

const 여친2: Girlfriend = {
  name: '앰버',
};

// 여친2.name = '유라'; // 읽기 전용 속성이므로 name에 할당할 수 없다.
// 타입스크립트 에러는 에디터 & 터미널에서만 존재한다.

type Name = string;
type Age = number;

type Person = Name | Age; // 유니온 타입

type positionX = { x: number };
// type positionX  변수 재정의 불가능
type positionY = { y: number };

type NewType = positionX & positionY; // & 연산자로 object extend

let position: NewType = { x: 10, y: 20 };

// 숙제1
type Test1 = { name: string; age: number };
type Test1_1 = { name: string; gender: string };

type NewTest1 = Test1 & Test1_1;

let NewTestObj1: NewTest1 = { name: '김철수', age: 25, gender: '남' };

// 숙제2
type Test2 = {
  color?: string;
  size: number;
  readonly position: number[];
};

let newTest2: Test2 = {
  color: 'blue',
  size: 15,
  position: [1, 2, 3],
};

// 숙제3
type Test3 = { name: string; email?: string; phone: number };
let userInfo: Test3 = {
  name: 'kim',
  phone: 123,
};

// 숙제4
type Adult = { adult: boolean };
type FullInfo = Test3 & Adult;

let fullUserInfo: FullInfo = {
  name: 'kim',
  phone: 11234,
  adult: true,
};
