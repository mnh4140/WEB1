const title = document.querySelector("#title")

const CLICKED_CLASS = "clicked";
//css에 있는 clicked를 뜻함
function handleClick() {
  /*
  const hasClass = title.classList.contains(CLICKED_CLASS);
  // classList.contains 오브젝트를 사용하여 CLICKED_CLASS 가 가지고 있는
  clicked 클래스가 있는지 체크 후 있으면 ture, 없으면 fales 를 반환

  if(!hasClass){
  // !hasClass 는 fales를 반환받았을때 즉 CLICKED_CLASS 값이 없을때
    title.classList.add(CLICKED_CLASS);
    // add 함수를 사용하여, CLICKED_CLASS의 클래스 값 추가
  } else {
    title.classList.remove(CLICKED_CLASS);
    // remove 함수를 이용하여, CLICKED_CLASS의 클래스 값 제거
  }
  해당 코드는 아래의 토글 함수로 대체 가능하다.*/

  title.classList.toggle(CLICKED_CLASS);
}
function init(){
  title.addEventListener("click", handleClick);
}
init()
