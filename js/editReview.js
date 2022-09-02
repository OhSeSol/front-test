const url = new URL(window.location.href);
const urlParam = url.searchParams;

let reviewIdx = urlParam.get('reviewIdx');
let videoIdx = urlParam.get('videoIdx');

let jsonData = localStorage.getItem(`reviews${videoIdx}`);
let allReview = JSON.parse(jsonData);

let title = allReview[reviewIdx].title;
let content = allReview[reviewIdx].content;

document.querySelector("#exampleFormControlInput1").value = title;
document.querySelector("#exampleFormControlTextarea1").value = content;

let btnEdit = document.querySelector("#btnEdit");
btnEdit.addEventListener("click", doEdit);
function doEdit() {
  let newTitle = document.querySelector("#exampleFormControlInput1").value;
  let newContent = document.querySelector("#exampleFormControlTextarea1").value;

  allReview[reviewIdx].title = newTitle;
  allReview[reviewIdx].content = newContent;
  localStorage.setItem(`reviews${videoIdx}`, JSON.stringify(allReview));
  window.alert("수정 되었습니다.");
  window.close();
};

const cancelBtn = document.querySelector("#btnCancel");
cancelBtn.addEventListener("click", ()=>{
  window.close();
})