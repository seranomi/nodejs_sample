// Pure JS (Vanilia JS) : Object only -> Protype-based programming
// object
var robot = {
    // Property(속성)
    name: "R2-D2",
    model: "AstroMech",
    status: "Active",
    // Method(행동)
    performTask: function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    },
    updateStatus: function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, "s tatus is now ").concat(this.status));
    },
};
var robot2 = {
    // Property(속성)
    name: "R2-D2",
    model: "AstroMech",
    status: "Active",
    // Method(행동)
    performTask: function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    },
    updateStatus: function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, "s tatus is now ").concat(this.status));
    },
};
var robot3 = {
    // Property(속성)
    name: "R2-D2",
    model: "AstroMech",
    status: "Active",
    // Method(행동)
    performTask: function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    },
    updateStatus: function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, "s tatus is now ").concat(this.status));
    },
};
// .
// .
// .
// usage with "." dot operator
console.log(robot.name); // Accessing Property
robot.performTask("Getting ready to move"); // Calling Method
// JS에서는 클래스 없음 객체를 모두 일일히 만들어야한다. 
// 수정, 추가 사항을 모든 객체에서 바꿔야한다.
// 추가와 수정에 비효율적
