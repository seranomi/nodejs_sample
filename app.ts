console.log("hello");

// 변수의 타입 명시 방법
let a: number = 10; //숫자, number
let b: string = "Hello"; //문자열, string
let c: boolean = true; // false, Boolean 참, 거짓
let d: number[] = [1, 2, 3, 4]; // Array, 배열
let e: Person = { name: "Tom", age: 35 }; // Object 객체

interface Person {
  name: String;
  age: number;
}

a = 50;
b = "50";

console.log("a=" + a, ", type of " + typeof a); //typeof 내장함수
console.log("b=" + b, ", type of " + typeof b);
console.log("c=" + c, ", type of " + typeof c);
//console.log("d=" + d, ", type of" + typeof d);
console.log("d[0]=" + d[0], ", type of " + typeof d);
console.log("e.naem=" + e.name, "e.age=" + e.age, ", type of " + typeof e);
//참조형 변수는 Object라 함

let columnLength = 10; //길이를 cm 단위, number로 지정
//.. 개발 진행 과정
columnLength = 30;
//.. 개발 진행 과정
let addLength = columnLength + 5;
let meterLength = addLength / 10;

console.log(addLength);
console.log(meterLength);

//메서드의 타입 명시 방법법
function add(x: number, y: number): number {
  return x + y;
}
const obj = { width: 10, height: 15 };
const area = obj.width * obj.height;
