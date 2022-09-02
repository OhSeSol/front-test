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
          if (3 < i && i < 7) {
            let videoCard = `
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
                        <i class="bi bi-eye"></i>
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

let btnTotal = document.querySelector("#total");
btnTotal.addEventListener("click", doShow);
let btnUpper = document.querySelector("#upper");
btnUpper.addEventListener("click", doShow);
let btnLeg = document.querySelector("#leg");
btnLeg.addEventListener("click", doShow);
let btnStomach = document.querySelector("#stomach");
btnStomach.addEventListener("click", doShow);


let partCard = document.querySelector("#partVideoList");
let idx = 0;
let jsonData = localStorage.getItem(`video${idx}`);
let videoInfo = JSON.parse(jsonData);
console.log(document.getElementById('upper').checked)


function doShow() {
  if (document.getElementById('total').checked) {
    partCard.innerHTML = '';
    for (let idx = 0; idx < 8; idx++) {
      let jsonData = localStorage.getItem(`video${idx}`);
      let videoInfo = JSON.parse(jsonData);
      if (videoInfo.part === "전신") {
        partCard.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./img/thumbnail${idx + 1}.jpg" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">
                  <div class="card-upper">
                    <div class="summary">
                      ${videoInfo.title}
                    </div>
                    <div class="viewicon">
                      <i class="bi bi-eye"></i>
                    </div>
                  </div>
                </p>
                <div class="btns">
                  <div class="part">
                    ${videoInfo.part}
                  </div>
                  <div class="creator">
                    ${videoInfo.channelName}
                  </div>
                </div>
              </div>
          </div>
        `
      }
    }
  } else if (document.getElementById('upper').checked) {
    partCard.innerHTML = '';
    for (let idx = 0; idx < 8; idx++) {
      let jsonData = localStorage.getItem(`video${idx}`);
      let videoInfo = JSON.parse(jsonData);
      if (videoInfo.part === "상체") {
        partCard.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./img/thumbnail${idx + 1}.jpg" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">
                  <div class="card-upper">
                    <div class="summary">
                      ${videoInfo.title}
                    </div>
                    <div class="viewicon">
                      <i class="bi bi-eye"></i>
                    </div>
                  </div>
                </p>
                <div class="btns">
                  <div class="part">
                    ${videoInfo.part}
                  </div>
                  <div class="creator">
                    ${videoInfo.channelName}
                  </div>
                </div>
              </div>
          </div>
        `
      }
    }
  } else if (document.getElementById("leg").checked) {
    partCard.innerHTML = '';
    for (let idx = 0; idx < 8; idx++) {
      let jsonData = localStorage.getItem(`video${idx}`);
      let videoInfo = JSON.parse(jsonData);
      if (videoInfo.part === "하체") {
        partCard.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./img/thumbnail${idx + 1}.jpg" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">
                  <div class="card-upper">
                    <div class="summary">
                      ${videoInfo.title}
                    </div>
                    <div class="viewicon">
                      <i class="bi bi-eye"></i>
                    </div>
                  </div>
                </p>
                <div class="btns">
                  <div class="part">
                    ${videoInfo.part}
                  </div>
                  <div class="creator">
                    ${videoInfo.channelName}
                  </div>
                </div>
              </div>
          </div>
        `
      }
    }
  } else if (document.getElementById("stomach").checked) {
    partCard.innerHTML = '';
    for (let idx = 0; idx < 8; idx++) {
      let jsonData = localStorage.getItem(`video${idx}`);
      let videoInfo = JSON.parse(jsonData);
      if (videoInfo.part === "복부") {
        partCard.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./img/thumbnail${idx + 1}.jpg" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">
                  <div class="card-upper">
                    <div class="summary">
                      ${videoInfo.title}
                    </div>
                    <div class="viewicon">
                      <i class="bi bi-eye"></i>
                    </div>
                  </div>
                </p>
                <div class="btns">
                  <div class="part">
                    ${videoInfo.part}
                  </div>
                  <div class="creator">
                    ${videoInfo.channelName}
                  </div>
                </div>
              </div>
          </div>
        `
      }
    }
  }
}