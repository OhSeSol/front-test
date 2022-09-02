function Member(memberName, id, pw) {
  this.memberName = memberName;
  this.id = id;
  this.pw = pw;
}




let jsonData = localStorage.getItem("members");
if (jsonData != null) {
  let allMember = JSON.parse(jsonData);

  let addMember = document.querySelector("#addMember");
  addMember.addEventListener("click", doAdd);
  function doAdd() {
    let memberName = document.querySelector("#exampleFormControlInput1").value;
    let id = document.querySelector("#exampleFormControlInput2").value;
    let pw = document.querySelector("#exampleFormControlInput3").value;

    if (!memberName.trim()) {
      return alert("이름을 입력하세요.");
    } else if (!id.trim()) {
      return alert("아이디를 입력하세요.");
    }else if (!pw.trim()) {
      return alert("비밀번호를 입력하세요.");
    }

    let member = new Member(memberName, id, pw);
    allMember.push(member);

    localStorage.setItem("members", JSON.stringify(allMember));
    window.alert("등록되었습니다.");
    window.open("index.html", "_self");
  }
} else {
  let addMember = document.querySelector("#addMember");
  addMember.addEventListener("click", doAdd);
  function doAdd() {
    let memberName = document.querySelector("#exampleFormControlInput1").value;
    let id = document.querySelector("#exampleFormControlInput2").value;
    let pw = document.querySelector("#exampleFormControlInput3").value;

    if (!memberName.trim()) {
      return alert("이름을 입력하세요.");
    } else if (!id.trim()) {
      return alert("아이디를 입력하세요.");
    }else if (!pw.trim()) {
      return alert("비밀번호를 입력하세요.");
    }

    
    let member = new Member(memberName, id, pw);    
    let arr = [];
    arr.push(member);
    localStorage.setItem("members", JSON.stringify(arr));
    window.alert("등록되었습니다.");
    window.open("index.html", "_self");

  }
}