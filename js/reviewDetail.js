//reviewList.html?reviewIdx=0&videoIdx=0;

const url = new URL(window.location.href);
const urlParam = url.searchParams;

let reviewIdx = urlParam.get('reviewIdx');
let videoIdx = urlParam.get('videoIdx');

let jsonData = localStorage.getItem(`reviews${videoIdx}`);
let allReview = JSON.parse(jsonData);

let title = allReview[reviewIdx].title;
let editor = allReview[reviewIdx].name;
let content = allReview[reviewIdx].content;
let view = allReview[reviewIdx].view;
let time = allReview[reviewIdx].time;

console.log(allReview[reviewIdx].title);
document.querySelector(".review-title").innerHTML = `<b>${title}</b>`;
document.querySelector(".editor").innerHTML = editor;
document.querySelector(".date").innerHTML = time;
document.querySelector(".view").innerHTML = view;
document.querySelector(".review-content").innerHTML = content;

let btnEdit = document.querySelector("#editbtn");
btnEdit.addEventListener("click", doEdit);
function doEdit() {
  window.open(`editReview.html?videoIdx=${videoIdx}&reviewIdx=${reviewIdx}`, "poll", "width=600, height=550, top=150, left=200");
};
