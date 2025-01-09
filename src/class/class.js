// Class 이용
var Robot = /** @class */ (function () {
    // Constructor(생성자)
    function Robot(name, model) {
        this.status = "Active";
        this.name = name;
        this.model = model;
    }
    ;
    // Method(행동)
    Robot.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    };
    ;
    Robot.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, "s tatus is now ").concat(this.status));
    };
    ;
    return Robot;
}());
var r1 = new Robot("A1-B2", "Optimus");
var r2 = new Robot("C3-D4", "Bumble");
var r3 = new Robot("E5-F6", "Rotus");
// Accessing fields and Calling methods
console.log(r1.name);
console.log(r2.model);
console.log(r3.status);
r1.performTask("Charging");
r2.performTask("Explorering");
r3.updateStatus("On Repair");
// No-args Constructor
var Pet = /** @class */ (function () {
    function Pet() {
        this.category = "Cat";
        this.name = "Chu";
        // 기본 생성자
        //constructor() {}
    }
    return Pet;
}());
var p1 = new Pet();
console.log(p1.name);
var User = /** @class */ (function () {
    // [생성자 부분]
    function User(username, email) {
        this.job = "Student"; // 기본값을 주는 경우
        this.username = username;
        this.email = email;
    }
    // [메서드 부분]
    User.prototype.study = function () {
        console.log("".concat(this.username, " is studying."));
    };
    return User;
}());
// [객체 생성] (new 키워드와 arguments 입력)
var user1 = new User("홍길동", "hong@abcd.co.kr");
var user2 = new User("김철수", "kim@example.com");
// [객체의 사용, 접근] (. 도트연산자 사용)
// 1. 인스턴스 자체 접근
console.log(user1); // 출력 : User{ username: '홍길동', email: '...'}
// 2. 인스턴스의 세부 필드 접근
console.log(user2.username); // 출력 : 김철수
// 3. 메서드 호출
user1.study();
user2.study();
