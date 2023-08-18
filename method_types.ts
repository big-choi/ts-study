type 함수타입 = (a: string) => number;

let 함수타입2: 함수타입 = function () {
  return 1;
};

type Member = {
  name: string;
  plusOne: (a: number) => number;
  changeName: () => void;
};

let 회원정보: Member = {
  name: 'kim',
  plusOne(a) {
    return a + 1;
  },
  changeName() {
    console.log('안녕');
  },
};

회원정보.plusOne(3);
회원정보.changeName();

type 숫자함수타입 = (a: string) => string | number;

let cutZero: 숫자함수타입 = function (a) {
  let num = a;
  return num.replace(/(^0+)/, '');
};

console.log(cutZero('0000121250'));

let removeDash: 숫자함수타입 = function (a) {
  let num = a;
  return parseInt(num.replace(/-/g, ''), 10);
};

console.log(removeDash('010-1111-2222'));
