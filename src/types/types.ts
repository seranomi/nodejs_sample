// The primitives 대소문자 주의
const str: string = "Hello"; // string - 문자열, ""로 감싸서 표현
const num: number = 10; // number - 숫자, int, double 등 세부 타입은 없음
const bool: boolean = true; // boolean - 논리, true, false

console.log(str.length); //
console.log(str.toUpperCase()); //

// String, Number, Boolean는 타입 명시법과 다르니 주의/강제 형변환
const wrapperStr = new String(num);

// Array
// -------- 배열의 초기화 방법
let arrayOfNembers1: number[];
arrayOfNembers1 = [5];
arrayOfNembers1 = [5, 10, 30];

console.log(arrayOfNembers1[0]); // 5
console.log(arrayOfNembers1[1]); // 10
console.log(arrayOfNembers1[2]); // 30

let arrayOfNembers2: Array<number>;
arrayOfNembers2 = [6];
arrayOfNembers2 = [6, 8, 20];
console.log(arrayOfNembers2[2]); // 20

// 해당 타입 요소만  허용 되는 배열 = 튜플이므로 선언 주의
// let singleNumberTuple: [number];
// singleNumberTuple = [5];

// 함수의 명시적 타입 지정 방법 (매개변수 / Parameter)
function greeter(name: string): string {
  return "Hello, " + name;
}
console.log(greeter("Tom"));

// 객체 타입
const car = {
  color: "red",
  model: "Sedan",
  manufacturer: "Toyota",
};

console.log(car.color);

// 구분자를 , 또는 ; 로 사용 할 수 있음
function printOutput(pt: {x: number, y: number}) {
  console.log("The X value is : " + pt.x);
  console.log("The Y value is : " + pt.y);
}