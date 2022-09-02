
const loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", ()=>{
  let id = document.querySelector("#exampleFormControlInput1").value;
  let pw = document.querySelector("#exampleFormControlInput2").value;

  let members = JSON.parse(localStorage.getItem("members"));

  members.forEach(member => {
    if(member.id===id){
      if(member.pw===pw){
        alert("로그인 성공!");
        localStorage.setItem("isLogined", true);
        window.open("index.html", "_self");
      }else{
        alert("비밀번호가 틀렸습니다.");
      }
    }
  });

})


