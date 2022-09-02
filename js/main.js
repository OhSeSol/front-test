window.onload = function () {
  let videos = [];
  if (!document.querySelector("#hotVideoList")) return;
  // 비동기 통신을 위해 새로운 xmlhttp 요청 생성
  const xhr = new XMLHttpRequest;
  // 요청 method
  const method = "GET";
  // 파일 위치
  const url = "data/video.json";

  // 위의 method 와 url 로 비동기 요청 초기화
  xhr.open(method, url, true);
  // 요청 헤더 설정
  xhr.setRequestHeader("Content-Type", "application/text");
  // 요청 동작 설정
  xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE) {
      // 요청 상태가 OK 이면
      if (xhr.status === 200) {
        // Json 객체 형태로 응답 받기
        const resJson = JSON.parse(xhr.responseText);
        // 자동차 data 삽입할 html 요소 찾기
        let videoList = document.querySelector("#hotVideoList");
        for (let i = 0; i < resJson.length; i++) {
          if (i < 3) {
            let videoCard =`
              <div class="card" style="width: 18rem;">
                <a href="reviewList.html?idx=${i}">
                  <img class="card-img-top" src="./img/thumbnail${i + 1}.jpg" alt="Card image cap" id="video${i + 1}">
                </a>
                <div class="card-body">
                  <p class="card-text">
                    <div class="card-upper">
                      <div class="summary">
                        ${resJson[i].title}
                      </div>
                      <div class="viewicon">
                        V
                      </div>
                    </div>
                  </p>
                  <div class="btns">
                    <div class="part">
                      ${resJson[i].part}
                    </div>
                    <div class="creator">
                      ${resJson[i].channelName}
                    </div>
                  </div>
                </div>
              </div>
              `
              ;
          videoList.innerHTML += videoCard;
          }
          localStorage.setItem(`video${i}`, JSON.stringify(resJson[i]));
          if (localStorage.getItem(`reviews${i}`) == null) {
            localStorage.setItem(`reviews${i}`, new Array());
          }
        }
      }
    }
  };
  xhr.send();
};

function regist() {
  let id = document.getElementById("id").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;

  if (!id || !password || !name || !email || !age) {
    alert("빈칸이 없도록 입력해주세요.");
    return;
  } else {
    const user = {
      id: id,
      password: password,
      name: name,
      email: email,
      age: age,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("사용자 등록 성공!");
    window.location.replace("login.html");
  }
}

function login() {
  let id = document.getElementById("id").value;
  let password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (
    user.id &&
    user.password &&
    user.id === id &&
    user.password === password
  ) {
    alert("로그인 성공 !");
    window.location.replace("index.html");
  } else {
    alert("로그인 실패 !");
  }
}
let isTotal = false;
let isUpper = false;
let isLeg = false;
let isStomach = false;

let btnTotal = document.querySelector("#total");
btnTotal.addEventListener("click", doShow("total"));
let btnUpper = document.querySelector("#upper");
btnTotal.addEventListener("click", doShow("upper"));
let btnLeg = document.querySelector("#leg");
btnTotal.addEventListener("click", doShow("leg"));
let btnStomach = document.querySelector("#stomach");
btnTotal.addEventListener("click", doShow("stomach"));
