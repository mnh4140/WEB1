/*====================================================================
# 2-0

21년 2월 19일 5시 43분 노마드 코더 무료 강의 2-0 시청

Argument or parameter : 인자

함수는 인자를 받아
ddd
인자는 변수같은 거야
우리가 주는 값을 저장해

함수는 인자는 무한대로 가질 수 있어
*/

/*
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
  console.log("Hi", ya, "i'm hansome");
  //console.log(`Hi ${ya} i'm hansome`); ` 이문자는 백틱이라고 한다.
}

sayHi("no");
====================================================================
*/


/* ====================================================================
# 2-1
const calcuator = {
  plus: function(a, b) {
    return a + b;
  }
}

const plus = calcuator.plus(5,5);
console.log(plus);
====================================================================
*/


/* # 2-2
====================================================================

타이틀을 바꿔보자

document 는 오브젝트

const title = document.getElemenrById("title")
console.log(title)



css에서 id로 무언가 선택할 때는 #을 써서 선택한다.
*여기서 무언가는 title이라고 하자.

=css=
#title{

}


javascript 에서 id로 무언가 선택할 때는 document.getElementById 라고 써서 선택할 수 있다.
*여기서 무언가는 title이라고 하자.

1. console.log(document.getElementById);

2. const title = document.getElementById ("title");

console.log(title)



Document Object Model의 약자.
자바스크립트에서 html을 객체로 바꾸어서 변경할 수 있다.

*/

const title = document.getElementById('title')
title.innerHTML="11"
//console.log(title)
