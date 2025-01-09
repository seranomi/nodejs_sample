// Class 이용
class Robot { // Members
    // Property(속성) 또는 Field(속성, 필드)
    name: string;
    model: string;
    status: string = "Active";
    
    // Constructor(생성자)
    constructor(name: string, model: string){
        this.name = name;
        this.model = model;
    };

    // Method(행동)
    performTask(task: string) {
        console.log(`${this.name} is performing ${task}.`);
    };

    updateStatus(newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}s tatus is now ${this.status}`);
    };
}

let r1 = new Robot("A1-B2", "Optimus");
let r2 = new Robot("C3-D4", "Bumble");
let r3 = new Robot("E5-F6", "Rotus");

// Accessing fields and Calling methods
console.log(r1.name);
console.log(r2.model);
console.log(r3.status);

r1.performTask("Charging");
r2.performTask("Explorering");
r3.updateStatus("On Repair");

// No-args Constructor
class Pet {
    category: string = "Cat";
    name: string = "Chu";

    // 기본 생성자
    //constructor() {}
}

let p1 = new Pet();
console.log(p1.name);

class User{
    // [필드 부분]
    username: string; // 타입만을 표기하는 경우
    email: string;
    job: string = "Student"; // 기본값을 주는 경우

    // [생성자 부분]
    constructor(username: string, email: string){
        this.username = username;
        this.email = email;
    }

    // [메서드 부분]
    study(): void {
        console.log(`${this.username} is studying.`);
    }
}

// [객체 생성] (new 키워드와 arguments 입력)
let user1 = new User("홍길동", "hong@abcd.co.kr");
let user2 = new User("김철수", "kim@example.com");

// [객체의 사용, 접근] (. 도트연산자 사용)
// 1. 인스턴스 자체 접근
console.log(user1) // 출력 : User{ username: '홍길동', email: '...'}
// 2. 인스턴스의 세부 필드 접근
console.log(user2.username); // 출력 : 김철수
// 3. 메서드 호출
user1.study();
user2.study();

// 클래스의 상속
class CleaningRobot{
    // Property(속성) 또는 Field(속성, 필드)
    name: string;
    model: string;
    cleaningSchedule: string[];
    status: string = "Active";
    
    // Constructor(생성자)
    constructor(name: string, model: string, cleaningSchedule: string[]){
        this.name = name;
        this.model = model;
        this.cleaningSchedule = cleaningSchedule;
    };

    // Method(행동)
    performTask(task: string) {
        console.log(`${this.name} is performing ${task}.`);
    };

    updateStatus(newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}s tatus is now ${this.status}`);
    };

    performCleaning() {
        console.log(`${this.name} is cleaning according to the schedule ${this.cleaningSchedule.join(", ")}.`);

    }
}

class CookingRobot{
    // Property(속성) 또는 Field(속성, 필드)
    name: string;
    model: string;
    acailableMenus: string[];
    status: string = "Active";
    
    // Constructor(생성자)
    constructor(name: string, model: string, acailableMenus: string[]){
        this.name = name;
        this.model = model;
        this.acailableMenus = acailableMenus;
    };

    // Method(행동)
    performTask(task: string) {
        console.log(`${this.name} is performing ${task}.`);
    };

    updateStatus(newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}s tatus is now ${this.status}`);
    };

    performCleaning() {
        console.log(`${this.name} is cooking according to the menus ${this.acailableMenus.join(", ")}.`);
        
    }
}