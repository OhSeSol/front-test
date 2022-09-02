//idx에 맞는 영상 띄우는 로직
const url = new URL(window.location.href);
const urlParam = url.searchParams;

let idx = urlParam.get('idx');

let jsonData = localStorage.getItem(`video${idx}`);
let video = JSON.parse(jsonData);
let frame = document.querySelector("iframe");
frame.setAttribute("src", video.url);


//리뷰 작성 버튼 관련 로직
const makeBtn = document.querySelector("#makeReview");
makeBtn.addEventListener("click", () => {
  window.open(`makeReview.html?idx=${idx}`, "poll", "width=600, height=550, top=150, left=200");
});

//리뷰 받아와서 띄우는 로직
const reviews = localStorage.getItem(`reviews${idx}`);
const revJson = JSON.parse(reviews);
let reviewList = document.querySelector("tbody");
for (let i = 0; i < revJson.length; i++) {
  reviewItem =
    `<tr>
      <th scope="row">${i+1}</th>
      <td><a href="reviewDetail.html?videoIdx=${idx}&reviewIdx=${i}">${revJson[i].title}</a></td>
      <td>${revJson[i].name}</td>
      <td>${revJson[i].view}</td>
      <td>${revJson[i].time}</td>
    </tr>`
  
  reviewList.innerHTML += reviewItem;
}