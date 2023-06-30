const clockContainer = document.querySelector(".js-clock"), clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    // 백틱 안에서 ? : 사용하여 작은 if 문을 만들 수 있다.
    // ? 앞부분이 if 문  : 뒷 부분이 else 문이다.
    // `${hours < 10 ? `0${hours}` : hours}` 예로 들면
    // hours 값이 10보다 작으면 ? 뒤에 있는 0${hours}으로 실행
    // 아니면 : 뒤에 있는 hours 로 실행 하라는
}


// 시작할때 init(초기화) 함수 만드는 습관 들이는게 좋다.
function init() {
  getTime();
  setInterval(getTime, 1000);
  // setInterval(fn, 1000)
  // 첫번째로 함수 두번째로 실행 시간을 인자로 받는 함수
  // 두번째 인자는 밀리 초 임
}

init ()
