console.log("hello");

let a = 10; //숫자, number
let b = "Hello"; //문자열, string
let c = true; // false, Boolean 참, 거짓
let d = [1, 2, 3, 4]; // Array, 배열
let e = { name: "Tom", age: 35 }; // Object 객체

b = 50;

console.log("a=" + a, ", type of " + typeof a); //typeof 내장함수
console.log("b=" + b, ", type of " + typeof b);
console.log("c=" + c, ", type of " + typeof c);
//console.log("d=" + d, ", type of" + typeof d);
console.log("d[0]=" + d[0], ", type of " + typeof d);
console.log("e.naem=" + e.name, "e.age=" + e.age, ", type of " + typeof e);
//참조형 변수는 Object라 함

let columnLength = 10; //길이를 cm 단위, number로 지정
//.. 개발 진행 과정
columnLength = "30cm";
//.. 개발 진행 과정
let addLength = columnLength + 5;
let meterLength = addLength / 10;

console.log(addLength);
console.log(meterLength);
