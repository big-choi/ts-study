"use strict";
function sum(a) {
    return a;
}
sum(10);
sum();
// function (x?: number): number {
//   return x * 2;
// }
// 자릿수 세주는 함수
function plusOne(x) {
    if (typeof x === 'number') {
        return x + 1;
    }
    else if (typeof x === 'string') {
        return Number(x) + 1;
    }
    else {
        return 0;
    }
}
