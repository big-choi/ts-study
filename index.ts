let 회원: number | string = 'kim';

let 회원들: (string | number)[] = [1, 2, '3', 4, 5];
let 오브젝트: { a: string | number } = { a: 123 };

let 이름: unknown;

// let 변수1 :string = 이름;

// 이름 - 1;

let 나이: string | number;

// 나이 + 1;

// 숙제
let user: string = 'kim';
let age: unknown | number = undefined;
let married: boolean = false;
let 철수: (string | unknown | number | boolean)[] = [];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};

(학교.score[4] = false), (학교.friend = ['Lee', 학교.teacher]);
