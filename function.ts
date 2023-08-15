function 내함수(x: number | string) {
  if (typeof x === 'string') {
    // x의 타입이 string 이면
    return x + '1';
  } else {
    return x + 1;
  }
}


// assertion 문법
function 내함수2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;

  // 용도
  // 1. Narrowing
  // 2. 어떤 타입이 들어올지 확실할 때.
  // 내함수2('123') -> assertion 문법을 쓰면 캐치 못함.
  // 왜 타입에러가 나는지 모르는 상황에서 임시 에러해결용
  // 어떤 타입이 들어올지 확실히 알고 있는데 컴파일러 에러가 방해할 때
}

내함수2(123);
