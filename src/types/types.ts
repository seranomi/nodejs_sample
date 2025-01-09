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
function printOutput(pt: { x: number, y: number }) {
  console.log("The X value is : " + pt.x);
  console.log("The Y value is : " + pt.y);
}

// 객체의 선택적 속성 지정 방법
function printName(user: { first: string, last?: string }) { // 선택적 옵션 ?
  if (user.last !== undefined) {
    console.log("Your First name is " + user.first.toUpperCase());
    console.log("Your Last name is " + user.last.toUpperCase());
  } else {
    console.log("Your name is " + user.first.toUpperCase());
  }
}

printName({ first: "Bob"});

// Any 타입
let object: any = { x: 0 };

object.foo();
object();
object.bar = 100;
object = "hello";
const n: number = object;

// Union 타입
function printId(id: number | string) { // or 
  if(typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(typeof id); // number
  }
}
// 단일 책임 원칙 위배 
printId(10);
printId("Hello");
// 타입 별칭으로도 Union 같이 다른 타입들도 커스텀 가능
type ID = number | string;

// Type Alias & Interface
function printCoord(point: Point) {
  console.log("The coordinate's x value is " + point.x);
  console.log("The coordinate's y value is " + point.y);
}

function calculateDistance(point1: Point, point2: Point): number {
  const locationX = point2.x -point1.x;
  const locationY = point2.y -point1.y;
  return Math.sqrt(locationX ** 2 + locationY ** 2)
}

printCoord({ x: 100, y: 100 });
// 해당 객체의 속성이 같다면,, 하지만 파라미터가 point1, 2, 3 계속해서 중복코드가 늘어남
// 사용자 정의 타입을 사용 할 수 있음
// type Point = { // c구조체?
//   x: number,
//   y: number
// }

interface Point { 
  x: number,
  y: number
}
// 개방 폐쇄 원칙: 기존코드 유지하면서 확장에 용이하게 코드를 짜라
// 개방 폐쇄 원칙에 유리하다라고 했기 때문에
// 예시
interface Animal {
  name: string;
}

interface Bear extends Animal{
  honey: boolean;
}

function getBear(): Bear {
  return{
    name: "Grizzly",
    honey: true,
  };
}

const bear = getBear();
console.log(bear.name)
console.log(bear.honey)

// Type Alias의 확장 예시
type Animal2 = {
  name: string;
}

type Bear2 = Animal2 &{
  honey: boolean;
}

function getBear2(): Bear2 {
  return{
    name: "Grizzly",
    honey: true,
  };
}

const bear2 = getBear2();
console.log(bear2.name)
console.log(bear2.honey)

// 인터페이스 병합의 차이점
interface Job{
  title: string;
}
interface Job { // type으로 변경하면 중복 코드 오류가 발생
  company: string;
}

const myJob: Job = {
  title: "SW Engineer", 
  company: "Tech", 
}

// 타입 단언 Type Assertions
const apiResponse: any = {
  id: 1,
  title: "TypeScript Begins",
  content: "This is contents of Article",
}

// // Error
// console.log(apiResponse.like);

interface Content {
  id: number;
  title: string;
  content: string;
}

// Type assertions using 'as' keyword
const content1 = apiResponse as Content;
// Type assertions using <> bracket syntax
const content2 = <Content>apiResponse;

//console.log(content1.like); // like does not exist
console.log(content2.id) // OK
console.log(content2.title) // OK
