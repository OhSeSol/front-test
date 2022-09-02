const url = new URL(window.location.href);
const urlParam = url.searchParams;

let idx = urlParam.get('idx');

let jsonData = localStorage.getItem(`reviews${idx}`);
console.log(jsonData == "")
if (jsonData != "") {
  let allReview = JSON.parse(jsonData);
  console.log(allReview);

  let btnAddreview = document.querySelector("#addreview");
  btnAddreview.addEventListener("click", doAdd);
  function doAdd() {
    let title = document.querySelector("#exampleFormControlInput1").value;
    let content = document.querySelector("#exampleFormControlTextarea1").value;
    
    function Review(name, title, content, view, time) {
      this.name = name;
      this.title = title;
      this.content = content;
      this.view = view;
      this.time = time;
    }
    
    var now = new Date();
    let nowReview = new Review("ssafy", title, content, 0, now.toLocaleString);
    allReview.push(nowReview);
    
  }
} else {
  let btnAddreview = document.querySelector("#addreview");
  btnAddreview.addEventListener("click", doAdd);
  function doAdd() {
    let title = document.querySelector("#exampleFormControlInput1").value;
    let content = document.querySelector("#exampleFormControlTextarea1").value;
    
    function Review(name, title, content, view, time) {
      this.name = name;
      this.title = title;
      this.content = content;
      this.view = view;
      this.time = time;
    }

    var now = new Date();
    let nowReview = new Review("ssafy", title, content, 0, now.toLocaleString);
  
    let arr = [];
    arr.push(nowReview);
    console.log(arr);
    localStorage.setItem(`reviews${idx}`, JSON.stringify(arr));
  }
}

