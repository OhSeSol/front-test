//idx에 맞는 영상 띄우는 로직
const url = new URL(window.location.href);
const urlParam = url.searchParams;

let idx = urlParam.get('idx');

let jsonData =  localStorage.getItem(`video${idx}`);
let video = JSON.parse(jsonData);
let frame = document.querySelector("iframe");
frame.setAttribute("src", video.url);


//리뷰 작성 버튼 관련 로직
const makeBtn = document.querySelector("#makeReview");
makeBtn.addEventListener("click", ()=>{
  window.open(`makeReview.html?idx=${idx}`, "poll", "width=600, height=550, top=150, left=200");
});

//리뷰 받아와서 띄우는 로직
const reviews = localStorage.getItem(`reviews${idx}`);
let reviewList = "";

//reviewList.html?reviewidx=0&videoIdx=0;