function Review(name, title, content, view, time) {
  this.name = name;
  this.title = title;
  this.content = content;
  this.view = view;
  this.time = time;
}

const url = new URL(window.location.href);
const urlParam = url.searchParams;

let idx = urlParam.get('idx');


let jsonData = localStorage.getItem(`reviews${idx}`);
if (jsonData != "") {
  let allReview = JSON.parse(jsonData);

  let btnAddreview = document.querySelector("#addreview");
  btnAddreview.addEventListener("click", doAdd);
  function doAdd() {
    let title = document.querySelector("#exampleFormControlInput1").value;
    let content = document.querySelector("#exampleFormControlTextarea1").value;

    if (!title.trim()) {
      return alert("질문을 입력하세요.");
    }else if(!content.trim()){
      return alert("내용을 입력하세요.");
    }
    var now = new Date();
    let nowReview = new Review("ssafy", title, content, 0, now.toLocaleString());
    allReview.push(nowReview);
    localStorage.setItem(`reviews${idx}`, JSON.stringify(allReview));
    window.alert("등록되었습니다.");
    window.close();
  }
} else {
  let btnAddreview = document.querySelector("#addreview");
  btnAddreview.addEventListener("click", doAdd);
  function doAdd() {
    let title = document.querySelector("#exampleFormControlInput1").value;
    let content = document.querySelector("#exampleFormControlTextarea1").value;

    if (!title.trim()) {
      return alert("질문을 입력하세요.");
    }else if(!content.trim()){
      return alert("내용을 입력하세요.");
    }

    var now = new Date();
    let nowReview = new Review("ssafy", title, content, 0, now.toLocaleString());
    let arr = [];
    arr.push(nowReview);
    localStorage.setItem(`reviews${idx}`, JSON.stringify(arr));
    window.alert("등록되었습니다.");
    window.close();
  }
}

const cancelBtn = document.querySelector("#cancelreview");
cancelBtn.addEventListener("click", ()=>{
  window.close();
})