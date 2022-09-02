const url = new URL(window.location.href);
const urlParam = url.searchParams;

let idx = urlParam.get('idx');

let jsonData =  localStorage.getItem(`video${idx}`);
let video = JSON.parse(jsonData);
let frame = document.querySelector("iframe");
frame.setAttribute("src", video.url);