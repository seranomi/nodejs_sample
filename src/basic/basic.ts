const message = "Hello!";
// Accessing the property 'toLowerCase'
// on 'message' and the calling it
message.toLowerCase();
// Calling 'message'
// message(); //변수를 호출할 수 없음

const announcement = "Hello World!";

// How quickly can you spot the typos?
announcement.toLocaleLowerCase();

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ..
} else if (value === "a") {
  //Oops, unreachable
}

function flipCoin() {
  // Meant to be Math.random()
  return Math.random() < 0.5;
}

// 1. 추론적 타입 지정
let x = 3;
//x = [0, 1, null];

class Animal {}
class Rhino extends Animal {
  hasHorn: boolean = true;
}
class Elephant extends Animal {
  hasTrunk: boolean = true;
}
class Snake extends Animal {
  hasLegs: boolean = false;
}

let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
// Animal[] 추론 추측, 그러나 다른 타입이 지정됨

// 2. 명시적 타입 지정 (Explict Types)(권장)

// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: Date) {
  //파라미터는 필수로 타입지정해야한다.
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan", new Date());
