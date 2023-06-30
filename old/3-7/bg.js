const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
  const image = new Image(); //오브젝트 만듬
  image.src = `IMG/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER)
  return number;

  /*
  자바스크립트에서 랜덤한 숫자 생성 방법

  자바스크립트에는 Math라는 모듈이 존재

  브라우져 개발자 모드 콘솔에서 Math.random() 치면
  랜덤한 숫자 출력 문제는 소수점까지 나옴

  만약 1~5 까지 랜덤 숫자 얻고 싶으면 아래와 같이 하면 됨
  Math.random() * 5

  자연수만 얻고 싶으면 아래와 같이 하면됨

  Math.floor() 함수는 버림(소수점 밑에) ///floor는 바닥 ceiling은 천장
  Math.ceil() 함수는 올림(소수점이 있음 숫자 올림)

  따라서 자연수의 랜덤한 숫자 얻는 방법
  Math.floor(Math.random() * 5)
  이렇게 하면 0~4 가 랜덤하게 출력됨
  */
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber)
}

init();
