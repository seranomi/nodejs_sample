// Generics
// Echo Command
// 아래와 같이 각 타입별 메서드를 구현한다면, 너무 많은 메서드를 정의해야 한다.
function indentity(arg) {
    return arg;
}
function indentity2(arg) {
    return arg;
}
function indentity3(arg) {
    return arg;
}
// 잘못하여 any타입을 사용한다면, 타입 검증의 목적을 달성하기 어려움
// function indentity(arg: any): any{
// arg = "10";
//     return arg;
// }
var arg = 10;
indentity(arg);
// 비효율적인 코드 해결 방법
// Use Generics
function indentityWithGenerics1(arg) {
    return arg;
}
// Use Generics multiple version "T" + "U"
function indentityWithGenerics2(arg) {
    return arg;
}
function indentityWithGenerics3(arg1, arg2) {
    return [arg1, arg2];
}
// Type이라는 키워드가 해당 함수 내 동일한 키워드들을 통일시킴
var input = "10";
var result = indentityWithGenerics(input);
console.log("type of input : " + typeof input);
console.log("type of result : " + typeof result);
console.log("result of using generics : " + result);
var result2 = indentityWithGenerics3(20, "Hello");
console.log(result2);
// 간단 테스트 패턴 연습
function indentityWithGenerics(arg) {
    return arg;
}
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
function isString(value) {
    return typeof value === 'string';
}
// given - 테스트에 필요한 초기 데이터를 설정
var testValue1 = 20;
var testValue2 = "Hi";
var testValue3 = [1, 20];
// when1 - 테스트를 실행하는 부분
var numberIdentity = indentityWithGenerics(testValue1);
// then1 - 결과를 검증하고 출력하는 부분
console.log("Input type is : ".concat(typeof testValue1));
console.log("Output type is : ".concat(typeof numberIdentity));
console.log("Is number : ".concat(isNumber(numberIdentity)));
// when2
var stringIdentity = indentityWithGenerics(testValue2);
// then2
console.log("Input type is : ".concat(typeof testValue2));
console.log("Output type is : ".concat(typeof stringIdentity));
console.log("Is string : ".concat(isString(stringIdentity)));
// when3
var arrayIdentity = indentityWithGenerics(testValue3);
// then3
console.log("Input type is : ".concat(typeof testValue3));
console.log("Output type is : ".concat(typeof arrayIdentity));
console.log("Is array : ".concat(Array.isArray(arrayIdentity)));
