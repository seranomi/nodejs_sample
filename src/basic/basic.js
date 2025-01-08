var message = "Hello!";
// Accessing the property 'toLowerCase'
// on 'message' and the calling it
message.toLowerCase();
// Calling 'message'
// message(); //변수를 호출할 수 없음
var announcement = "Hello World!";
// How quickly can you spot the typos?
announcement.toLocaleLowerCase();
var value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
    // ..
}
else if (value === "a") {
    //Oops, unreachable
}
function flipCoin() {
    // Meant to be Math.random()
    return Math.random() < 0.5;
}
