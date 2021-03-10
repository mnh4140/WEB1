/*====================================================================
# 2-0

21년 2월 19일 5시 43분 노마드 코더 무료 강의 2-0 시청

Argument or parameter : 인자

함수는 인자를 받아

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


const title = document.getElementById('title')
title.innerHTML="11"
//console.log(title)
*/

/* #2-3


//const title = document.getElementById('title')

// console.dir(title) -> title의 객체 정보를 보여준다.
//거기서 나온것이 innerHTML, title 여서 값을 바꿔본것
//innerHTML은 나타내는 텍스트 값이다.
// console.log(title)
// title.innerHTML="11" // title 변수의 텍스트 값을 11로 변경
// title.style.color="red"; //css를 무시하고 자비스크립트를 이용해 스타일 변경(폰트색 변경)
// document.title='i change that'; // 탭에 표시되는 이름 변경

//document.querySelector -> 노드의 첫번째 자식을 반환해
// const title = document.getElementById('title') 비슷한 역활
const title = document.querySelector("#title") // title 이라는 id를 찾고 싶어서 #title이라고 인자를 줌 / css와 동일, id로 찾고싶은 앞에 #을 붙임 마치 #title처럼
title.innerHTML="11" // title 변수의 텍스트 값을 11로 변경
title.style.color="red"; //css를 무시하고 자비스크립트를 이용해 스타일 변경(폰트색 변경)
document.title='i change that'; // 탭에 표시되는 이름 변경
*/

/*

==============================================================
# 2-4 2021-02-24 =============================================
==============================================================

const title = document.querySelector("#title"); // title 이라는 id를 찾고 싶어서 #title이라고 인자를 줌 / css와 동일, id로 찾고싶은 앞에 #을 붙임 마치 #title처럼


function handleClick() {
  title.style.color='blue';
  console.log("i have been change color")
}


const mystyle = title.style

// 글자를 클릭하면 색이 바뀌게 하는 함수 작성
function handleClick() {
  if (mystyle.color == 'blue') {
    mystyle.color='red';
    console.log("change color red")
  }
  else {
    mystyle.color='blue';
    console.log("change color blue")
  }
}

title.addEventListener("click", handleClick);
*/

/*
==============================================================
#2-5  2021-03-08 =============================================
==============================================================
TITLE : if, else, and, or


const age = prompt("How old are you")
// prompt 함수는 오래된 자바스크립트로 잘 사용 안함
// 사용자에게 값을 받는 함수
if (age < 19){
  console.log(`you're age is ${age}, you are kid`);
}
else {
  console.log(`you're age is ${age}, you are adult`);
}
*/

/*
==============================================================
#2-6  2021-03-08 =============================================
==============================================================
TITLE : DOM - if, else - Function practice


//const mystyle = title.style

const title = document.querySelector("#title")

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

// 글자를 클릭하면 색이 바뀌게 하는 함수 작성
function handleClick() {
  const currentColor = title.style.color;
  if (currentColor == BASE_COLOR) {
    console.log(`현재 글자색과 기본 색이 같습니다.`);
    title.style.color = OTHER_COLOR;
    console.log(`다른 글자 색상으로 변경합니다. 현재 글자 색상은 ${currentColor} 입니다.`);
  } else {
    console.log(`현재 글자색은 기본 색이 아닙니다.`);
    title.style.color = BASE_COLOR;
    console.log(`currentColor = ${currentColor}`);
    console.log(`원래 글자 색상으로 변경합니다. 현재 글자 색상은 ${currentColor} 입니다.`);
  }
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init()
*/

/*
==============================================================
#2-7  2021-03-08 =============================================
==============================================================
TITLE : DOM - if, else - Function practice Two
*/
const title = document.querySelector("#title")

const CLICKED_CLASS = "clicked";

function handleClick(){}

function init(){
  title.addEventListener("click", handleClick);
}
init()
