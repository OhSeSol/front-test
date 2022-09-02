//reviewList.html?reviewIdx=0&videoIdx=0;

const url = new URL(window.location.href);
const urlParam = url.searchParams;

let reviewIdx = urlParam.get('reviewIdx');
let videoIdx = urlParam.get('videoIdx');

let jsonData = localStorage.getItem(`reviews${reviewIdx}`);
let allReview = JSON.parse(jsonData);

let title = allReview[videoIdx].title;
let editor = allReview[videoIdx].name;
let content = allReview[videoIdx].content;
let view = allReview[videoIdx].viwe;
let time = allReview[videoIdx].time;

document.querySelector(".review-title").innerHTML = `<b>${title}</b>`
document.querySelector(".editor").innerHTML = editor;
document.querySelector(".date").innerHTML = time;
document.querySelector(".review-title").innerHTML = view;
document.querySelector("review-content").innerHTML = content;

let btnEdit = document.querySelector("#editbtn");
btnEdit.addEventListener("click", doEdit);
function doEdit() {
  window.open(`editReview.html?videoIdx=${videoIdx}&reviewIdx=${reviewIdx}`, "poll", "width=600, height=550, top=150, left=200");
};
