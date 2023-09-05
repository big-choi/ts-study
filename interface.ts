interface SquareInterface {
  color: string;
  width: number;
}

let square: SquareInterface = { color: 'red', width: 100 };

// 인터페이스 장점
// extends 키워드를 사용하여 인터페이스를 상속할 수 있다.
interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: 'kim' };
let 선생: Teacher = { name: 'kim', age: 20 };

type Animal2 = { name: string };
type Cat = { age: number } & Animal2;

// type 키워드와 interface 키워드의 차이점
// interface는 중복 선언이 가능하지만 type은 중복 선언이 불가능하다.

interface Person2 {
  name: string;
}

// 숙제1

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'Phone'] };

// 숙제2, 3

interface Cart {
  product: string;
  price: number;
}

interface CartWithCard extends Cart {
  card: boolean;
}

let 장바구니: CartWithCard[] = [
  { product: '청소기', price: 7000, card: true },
  { product: '삼다수', price: 800, card: false },
];

// 숙제4

interface Obj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let obj: Obj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
