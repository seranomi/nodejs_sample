// Pure JS (Vanilia JS) : Object only -> Protype-based programming

// object
let robot = {
    // Property(속성)
    name: "R2-D2",
    model: "AstroMech",
    status: "Active",
    
    // Method(행동)
    performTask: function (task: string) {
        console.log(`${this.name} is performing ${task}.`);
    },
    updateStatus: function (newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}s tatus is now ${this.status}`);
    },
}

let robot2 = {
    // Property(속성)
    name: "R2-D2",
    model: "AstroMech",
    status: "Active",
    
    // Method(행동)
    performTask: function (task: string) {
        console.log(`${this.name} is performing ${task}.`);
    },
    updateStatus: function (newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}s tatus is now ${this.status}`);
    },
}
let robot3 = {
    // Property(속성)
    name: "R2-D2",
    model: "AstroMech",
    status: "Active",
    
    // Method(행동)
    performTask: function (task: string) {
        console.log(`${this.name} is performing ${task}.`);
    },
    updateStatus: function (newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}s tatus is now ${this.status}`);
    },
}
// .
// .
// .

// usage with "." dot operator
console.log(robot.name) // Accessing Property
robot.performTask("Getting ready to move") // Calling Method
// JS에서는 클래스 없음 객체를 모두 일일히 만들어야한다. 
// 수정, 추가 사항을 모든 객체에서 바꿔야한다.
// 추가와 수정에 비효율적

