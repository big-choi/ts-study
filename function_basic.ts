// // 변수만 만들면 :any가 자동 할당됨. 쉴드 해제 문법.

// function 함수(x: number): number {
//   //return 되는 값은 number 타입
//   return x * 2;
// }

// //함수('kim') -> string 형식의 인수는 number 형식의 매개 변수에 할당될 수 없다.
// 함수(3);

// function 함수2(x: number): void {
//   ///return 1 + 1; -> 무언가를 return 하는 것을 막아줌.
//   1 + 1;
// }

// function 함수3(x: number): void {}

// //함수3() TS는 파라미터를 지정했으면 아규먼트도 개수가 동일해야 함.

// function 함수4(params?: number): void {}

// 함수4(); // 파라미터가 들어올 수도 있다. parmas?:number == parmas:number | undefined

// function 함수5(x: number | string): void {
// //   console.log(x + 3); // x는 number | string 유니온 타입이기 때문에 불가능
// }

// function 숙제1(name?: string) {
//   if (name) {
//     console.log(`안녕하세요 ${name}`);
//   } else {
//     console.log(`이름이 없습니다.`);
//   }
// }

// 숙제1();

// function 숙제2(params: string | number): number {
//   console.log(params.toString().length);
//   return params.toString().length;
// }

// 숙제2(245);

function 결혼가능하냐(pay: number, house: boolean, score: string): string|void {
  let totalScore: number = 0;
  totalScore += pay;

  if (house === true) {
    totalScore += 500;
  } else {
    totalScore += 0;
  }

  if (score == '상') {
    totalScore += 100;
  } else {
    totalScore += 0;
  }

  if (totalScore >= 600) {
    console.log('결혼 가능');
    return '결혼가능';
  }
}

결혼가능하냐(100, false, '상')
