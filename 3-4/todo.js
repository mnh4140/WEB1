const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //JSON.stringfy() 는 자바스크립트 object를 string으로 변환
  //localStorage는 string만 저장할수있어
}

function paintToDo(text) {
  //console.log(test);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  span.innerText = text;
  li.appendChild(delBtn); // father element에 넣는다
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj); // 순서는 푸시 이후 세이브 불러와야됨
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // 입력창 초기
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //console.log(loadedToDos); // 스트링
    const parsedToDos = JSON.parse(loadedToDos); // JSON을 이용해서 스트링을 오브젝트로 변환
    //console.log(parsedToDos); // 오브젝트

    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text) // 이걸로 저장한 todo리스트 목록 출력
    });
    //array가 가진건데 forEach,
    //기본적으 함수을 실행하는것
    //array에 담겨있는 것들을 각각 한번씩 함수를 실행

    //JSON = JavaScript Object Notation
    //데이터 전달 시 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능
    //자바스크립트의 object를 string으로 변환
    // string을 object로 변환해줄수있어
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init()
