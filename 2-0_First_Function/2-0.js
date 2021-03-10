/*
21년 2월 19일 5시 43분 노마드 코더 무료 강의 2-0 시청

Argument or parameter : 인자

함수는 인자를 받아

인자는 변수같은 거야
우리가 주는 값을 저장해

함수는 인자는 무한대로 가질 수 있어
*/
const nohun = {
  name : "Nohun",
  age : 28,
  gender : "Male",
  isHansome : true
}

console.log(nohun.age);
console.log("hi");
//console.log(nohun, console);


function sayHi(ya) {
  // ya는 함수의 인자로 변수명이라 생각하면 됨 potato도 됨 hamberger도 되고
  console.log("Hi", ya);
}

sayHi("no");
