const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) { // 로컬스토리지에 이름 저장
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) { //
  event.preventDefault(); // 앤터 눌러도 새로고침 안되게 하는 매소드
                          // 원래 앤터를 누르면 새로고침이 된다네
  const currentValue = input.value;
  // console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() { // 이름 물어보는 함수
  form.classList.add(SHOWING_CN); // from이 보이게 한다.
  form.addEventListener("submit", handleSubmit);
     // submit을 하면 handleSubmit 함수를 호출해라
}

function paintGreeting(text) { // 이름 출력하는 함수
  form.classList.remove(SHOWING_CN); // from이 안보이게 한다.
  // 폼은 이름 물어보는 인풋이 있어서 안보이면 이름 물어보는 창이 안나옴
  greeting.classList.add(SHOWING_CN); // h4 테그 항목이 출력한다
  greeting.innerText = `Hello ${text}`; // 인사하는 문구 출력
}

function loadName() { // 로컬 스토리지에 있는 이를 가져오기
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
